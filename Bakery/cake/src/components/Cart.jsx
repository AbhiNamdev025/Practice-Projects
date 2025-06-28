import React from 'react'

const Cart = ({ items = [], onRemove, onCheckout }) => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Cart</h2>
            {items.length === 0 ? (
                <div className="text-gray-500 text-center py-8">Your cart is empty.</div>
            ) : (
                <ul className="divide-y divide-gray-200 mb-4">
                    {items.map((item) => (
                        <li key={item.id} className="flex items-center justify-between py-3">
                            <div className="flex flex-col">
                                <span className="font-medium text-gray-900">{item.name}</span>
                                <span className="text-sm text-gray-500">x{item.quantity}</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="text-gray-700 font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                                <button
                                    className="text-red-500 hover:text-red-700 px-2 py-1 rounded transition"
                                    onClick={() => onRemove(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <div className="flex items-center justify-between border-t pt-4">
                <span className="text-lg font-semibold text-gray-800">Total: ${total.toFixed(2)}</span>
                <button
                    className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition disabled:opacity-50"
                    onClick={onCheckout}
                    disabled={items.length === 0}
                >
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart