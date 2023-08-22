import { useState } from 'react';

function DeleteButton() {
    const [message, setMessage] = useState(null);

    const handleDelete = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/api/delete', {
                method: 'POST'
            });
            const data = await response.json();

            if (response.ok) {
                setMessage(data.message);
            } else {
                setMessage('Error deleting products.');
            }
        } catch (error) {
            setMessage('Failed to connect to the server.');
        }
    }

    return (
        <div>
            <button onClick={handleDelete}>Delete All Products</button>
            {message && <p>{message}</p>}
        </div>
    );
}

export default DeleteButton;
