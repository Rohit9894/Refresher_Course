import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Input,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AuthState } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Weather = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const { handleLogout } = AuthState();
  async function getData() {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${query}&cnt=7&appid=a642600f0384a5e34545d35d9502fde2&units=metric`
    );
    res = await res.json();
    setData(res);
  }

  return (
    <Box bg={"skyblue"} w={"100%"} minH={"100vh"}>
      <Flex w={"50%"} mx="auto" gap={10} pt="10px">
        <Input
          bg="white"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button onClick={getData}>Get Data</Button>
        <Button
          colorScheme="red"
          onClick={() => {
            handleLogout();
            navigate("/login");
          }}
        >
          Logout
        </Button>
      </Flex>

      {Object.keys(data).length ? (
        <Card maxW="sm" mt={"20px"}>
          <CardBody>
            <Image
              src="https://images.unsplash.com/photo-1561553873-e8491a564fd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{data?.city?.name}</Heading>
              <Text>
                <b> Sunrise </b>:{" "}
                {new Date(data?.city?.sunrise * 1000).toLocaleString()}
              </Text>
              <Text>
                <b> Sunset </b>:{" "}
                {new Date(data?.city?.sunset * 1000).toLocaleString()}
              </Text>
              <Text>
                <b> Min Temp </b>: {data?.list[0]?.main?.temp_min}
                <sup>o</sup>C
              </Text>
              <Text>
                <b> Max Temp </b>: {data?.list[0]?.main?.temp_max}
                <sup>o</sup>C
              </Text>
            </Stack>
          </CardBody>
        </Card>
      ) : (
        <Heading textAlign={"center"} mt={"40px"}>
          Please Search the City...
        </Heading>
      )}
    </Box>
  );
};

export default Weather;
