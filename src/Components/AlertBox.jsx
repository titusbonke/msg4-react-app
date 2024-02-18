import React, { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript
const AlertBox = ({ message }) => {
  useEffect(() => {
    // Show the alert
    window.jQuery(".alert").alert();

    const timeout = setTimeout(() => {
      window.jQuery(".alert").fadeTo(500, 0).slideUp(500, function () {
        window.jQuery(this).remove();
      });
    }, 3000);

    // Clear the timeout on component unmount to prevent memory leaks
    return () => clearTimeout(timeout);
  }, []); // Run this effect only once on component mount

  return (
    <div className="alert alert-success alert-dismissible fade show alert-bottom-left m-2" role="alert">
      {message}
      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};
export default AlertBox;


export function ShowAlertBox(message, typeClass = "success", closeable = true, fadeAwayTime = 3000) {
  // Create the alert element
  const alertElement = document.createElement('div');
  alertElement.className = `alert alert-${typeClass} alert-dismissible fade show alert-bottom-left m-2`;
  alertElement.setAttribute("role", "alert");
  alertElement.innerHTML = `
    ${message}
    ${closeable ? `<button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>` : ""}
  `;

  // Append the alert to the body
  document.getElementById("alert-container").appendChild(alertElement);
  // Remove the alert after 3 seconds
  const timeout = setTimeout(() => {
      if (fadeAwayTime > 0) {
      window.jQuery(alertElement).fadeTo(500, 0).slideUp(500, function () {
        this.remove();
      });
    }
    }, fadeAwayTime);
  // Clear the timeout on alert close to prevent premature removal
  alertElement.querySelector('.close')?.addEventListener('click', () => {
    clearTimeout(timeout);
    alertElement.remove();
  });
}

