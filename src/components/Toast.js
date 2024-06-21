// src/components/Toast.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeToast } from '../redux/actions/toastActions';
import './Toast.css'; // Create some CSS to style your toasts

const Toast = () => {
  const dispatch = useDispatch();
  const toasts = useSelector(state => state.toasts);

  const handleRemoveToast = (id) => {
    dispatch(removeToast(id));
  };

  return (
    <div className="toast-container">
      {toasts.map(toast => (
        <div key={toast.id} className="toast">
          <div className="toast-message">{toast.message}</div>
          <button onClick={() => handleRemoveToast(toast.id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default Toast;
