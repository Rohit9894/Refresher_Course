import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthState } from "../Context/AuthContext";
const init = {
  email: "",
  password: "",
};
function Login() {
  const [show, setShow] = useState(false);
  const [formState, setFormState] = useState(init);
  const { handleLogin } = AuthState();

  const handleClick = () => setShow(!show);
  const navigate = useNavigate();
  function handleChange(e) {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }
  const { email, password } = formState;
  async function handleSubmit() {
    let res = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formState),
    });
    res = await res.json();
    if (res?.token) {
      handleLogin(res?.token);
      navigate("/")
    }
  }
  return (
    <Flex
      w={"100%"}
      h="100%"
      bg={"skyblue"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Heading mt={10}>Login</Heading>
      <VStack
        spacing={"5px"}
        mt={"5%"}
        bg={"black"}
        p={20}
        rounded={"20px"}
        color={"white"}
      >
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input name="email" value={email} onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input
              name="password"
              value={password}
              onChange={handleChange}
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button
          colorScheme={"blue"}
          width="100%"
          mt={10}
          onClick={() => handleSubmit()}
        >
          Log in
        </Button>
      </VStack>
    </Flex>
  );
}

export default Login;
