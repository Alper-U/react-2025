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

export default function AddSiteModal() {
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

  const onCreateSite: SubmitHandler<AddSiteInputs> = ({
    siteName,
    siteUrl,
  }) => {
    createSite({
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      siteName,
      siteUrl,
    });
    toast({
      title: "Success!",
      description: "We've added your site.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    onClose();
    reset();
  };

  return (
    <>
      <Button onClick={onOpen} maxW="200px" variant="solid" size="md">
        Add Your First Site
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
                {...register("siteName", { required: true, maxLength: 20 })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                placeholder="https://example.com"
                {...register("siteUrl", { required: true, maxLength: 20 })}
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
