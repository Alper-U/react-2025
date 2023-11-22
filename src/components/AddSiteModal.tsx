import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

import { useForm, SubmitHandler } from "react-hook-form";
import { createSite } from "@/lib/firestore";
import { useAuth } from "@/lib/auth";
import { mutate } from "swr";

export default function AddSiteModal({ children }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const auth = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<AddSiteInputs>();
  const toast = useToast();

  const onCreateSite: SubmitHandler<AddSiteInputs> = async ({ name, url }) => {
    await createSite({
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      name,
      url,
    });
    toast({
      title: "Success!",
      description: "We've added your site.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    await mutate("/api");
    onClose();
    reset();
  };

  return (
    <>
      <Button
        variant="solid"
        size="md"
        backgroundColor="#000000"
        color="white"
        onClick={onOpen}
      >
        {children}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
          <ModalHeader fontWeight="bold">Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="My Site"
                {...register("name", { required: true, maxLength: 20 })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                placeholder="https://example.com"
                {...register("url", { required: true, maxLength: 20 })}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3}>
              Cancel
            </Button>
            <Button backgroundColor="#99FFFE" type="submit">
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
