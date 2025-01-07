import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

export const EditModal = ({ isOpen, onOpenChange, onSave, title, children }) => {

  return (
    <>
      <Modal className="h-[95%] overflow-scroll" isOpen={isOpen} isDismissable={false} onOpenChange={onOpenChange}>
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
                <Button className="bg-red-700 text-white font-medium rounded-md" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button className="bg-primary text-white rounded-md font-medium" onPress={() => {
                  onSave();
                  onClose();
                }}>
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
