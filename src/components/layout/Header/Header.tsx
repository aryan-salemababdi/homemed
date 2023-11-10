"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ReactElement, ReactNode } from "react";
import { useRouter as useNextRouter, usePathname } from "next/navigation";
import {
  AppBar,
  Grid,
  Typography,
  useScrollTrigger,
  Slide,
  Button,
  List,
  ListItem,
  Menu,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { NextPage } from "next";

interface HeaderProps {
  window?: () => Window;
  children: ReactElement | ReactNode | any;
}

type Router = ReturnType<typeof useNextRouter>;

function HideOnScroll(props: HeaderProps) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header: NextPage<HeaderProps> = ({ children }) => {
  const router: Router = useNextRouter();

  const currentPath = usePathname();

  const [scroll, setScroll] = useState<number>(0);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <HideOnScroll>
        <AppBar
          sx={{
            background: scroll > 30 || currentPath !== "/" ? "#fff" : "none",
            boxShadow:
              scroll > 30 || currentPath !== "/"
                ? "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)"
                : "none",
          }}
        >
          <Grid container justifyContent="center" alignItems="center">
            <Grid item p={1}>
              {/* <Image
                src="/images/logo/12.png"
                alt="logo"
                width={90}
                height={90}
                style={{ borderRadius: "5%",backgroundColor:"none" }}
              /> */}
              <Typography fontWeight="bold" variant="h4">
                  <span style={{color:"#3AA76D"}}>پزشک</span> در منزل
              </Typography>
            </Grid>
          </Grid>
        </AppBar>
      </HideOnScroll>
    </>
  );
};
export default Header;
