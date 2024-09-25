import React from "react";
import {
  Modal as BaseModal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import Button from "@/components/Button";

const Modal = ({
  open = false,
  text,
  okText = "Ok",
  closeText = "Close",
  closable = true,
  content,
  onChange,
}: {
  open?: boolean;
  text?: string;
  okText?: string;
  closeText?: string;
  closable?: boolean;
  content?: React.ReactNode;
  onChange?: (isOpen: boolean) => void;
}) => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure({
    onChange,
  });

  React.useEffect(() => {
    open ? onOpen() : onClose();
  }, [open]); // eslint-disable-line

  return (
    <>
      <BaseModal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        classNames={{
          header: "font-open-sans",
          body: "font-open-sans",
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1"></ModalHeader>
          <ModalBody>{content ? content : <p>{text}</p>}</ModalBody>
          <ModalFooter>
            {closable ? (
              <Button color="primary" variant="bordered" onPress={onClose}>
                {closeText}
              </Button>
            ) : null}
            <Button
              className="font-general-sans"
              color="primary"
              onPress={onClose}
            >
              {okText}
            </Button>
          </ModalFooter>
        </ModalContent>
      </BaseModal>
    </>
  );
};

export default Modal;
