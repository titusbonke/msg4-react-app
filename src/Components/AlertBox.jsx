import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery library

const AlertBox = ({ message }) => {
  useEffect(() => {
    // Show the alert
    $(".alert").alert();

    // Hide the alert after 3 seconds
    const timeout = setTimeout(() => {
      $(".alert").fadeTo(500, 0).slideUp(500, function(){
        $(this).remove();
      });
    }, 3000);

    // // Clear the timeout on component unmount to prevent memory leaks
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
