import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

export const EditModal = ({ isOpen, onOpenChange, title, children }) => {

  return (
    <>
      <Modal isOpen={isOpen} isDismissable={false} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-gray-900">{title}</ModalHeader>
            
              {/* Modal Body */}
              <ModalBody>
                {children}
              </ModalBody>

              {/* Modal Footer */}
              <ModalFooter>
                <Button className="font-medium" color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button className="bg-primary text-white rounded-md font-medium" onPress={onClose}>
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
