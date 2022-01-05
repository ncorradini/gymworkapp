import { toast } from 'react-toastify';

export const messageNotification = (message, state) => {
    switch(state) {
        case 'error': return (
            toast.error(message, {
                position: "bottom-center",
                autoClose: 4000,
                closeOnClick: true,
                pauseOnHover: false,
            })
        )

        case 'success': return (
            toast.success(message, {
                position: "bottom-center",
                autoClose: 4000,
                closeOnClick: true,
                pauseOnHover: false,
            })
        )
    }
}
