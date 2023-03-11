import { Alert,AlertTitle ,AlertIcon,AlertDescription} from "@chakra-ui/react";
import React from "react";

const ErrorComponent = ({ message }) => {
  return (
    <Alert status="error" >
      <AlertIcon />
      <AlertTitle>{message}</AlertTitle>
      <AlertDescription>
        Your CryptoApp experience may be degraded.
      </AlertDescription>
    </Alert>
  );
};

export default ErrorComponent;
