<?php 
if(isset($_POST['submit'])){
    // https://stackoverflow.com/questions/18379238/send-email-with-php-from-html-form-on-submit-with-the-same-script
    $to = "vdawson647@gmail.com"; // this is your Email address
    $from = $_POST['wl_email']; // this is the sender's Email address
    $first_name = $_POST['wl_fname'];
    $last_name = $_POST['wl_lname'];
    $service_type = $_POST['WL_ProductLst'];
    $subject = "WoodLocked construction inquiry submission";
    $subject2 = "Copy of your form submission";
    $message = $first_name . " " . $last_name . " is inquiring about:" . $service_type . "Services... \n\n" . $_POST['wl_message'];
    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['wl_message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    }
?>
