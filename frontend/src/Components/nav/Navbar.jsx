import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ username, role, loggedIn, setLoggedIn }) => {
  const navigate = useNavigate();
  
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const [isSeller, setIsSeller] = useState(false);

  useEffect(() => {
    if (role === "seller") {
      setIsSeller(true);
    } else {
      setIsSeller(false);
    }
  }, [role]);

  const handleLogout = () => {
    localStorage.removeItem('Auth');
    setIsPopoverVisible(false);
    setLoggedIn(!loggedIn);
    navigate('/');
  };

  const togglePopover = () => {
    setIsPopoverVisible(!isPopoverVisible);
  };