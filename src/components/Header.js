import React from 'react'
import { Link } from "react-router-dom";
import { Button, HStack } from "@chakra-ui/react";


const Header = () => {
    return (<HStack minWidth="100vw" justifyContent="space-between" p={"4"} shadow={"base"} bgGradient='linear(256.47deg, #5E2AB3 2.64%,#161E6C 140.46%)'>
        <Button variant={"ghost"} pl={"3"} color={"white"} transition={"all 0.3s"}>
            <Link to="/">Home</Link>
        </Button>
        <Button variant={"ghost"} pl={"2"} me={""} color={"white"} transition={"all 0.3s"}>
            <Link to="/bookmarks">Bookmarks</Link>
        </Button>
    </HStack>

    );
};

export default Header