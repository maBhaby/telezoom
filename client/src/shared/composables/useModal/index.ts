import { ref, type Ref } from "vue"

interface ModalParams {
    initialValue?: boolean
}

interface ModalReturn {
    isOpen: Ref<boolean, boolean>
    handleOpen(): void
    handleClose(): void
}

export const useModal = ({initialValue = false}: ModalParams = {}): ModalReturn => {
    const isOpen = ref(initialValue)

    const handleOpen = () => {
        isOpen.value = true
    }

    const handleClose = () => {
        isOpen.value = false
    }

    return {isOpen, handleOpen, handleClose}
}