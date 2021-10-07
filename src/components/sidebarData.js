import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { FaUserInjured } from "react-icons/fa";
import { IoPieChartSharp } from "react-icons/io5";
import { FaVial } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaRegChartBar } from "react-icons/fa";
export const SidebarData = [
  {
    title: "OverView",
    path: "/administrador",
    icon: <IoPieChartSharp />,
  },
  {
    title: "Pacientes",
    path: "/RegisterClients",
    icon: <FaUserInjured />,
  },
  {
    title: "Test / Orden",
    path: "/RegisterOrden",
    icon: <FaVial />,
  },
  {
    title: "Levantar Orden",
    path: "/levantar_orden",
    icon: <FaSortAmountUpAlt />,
    iconClosed: <FaAngleDown />,
    iconOpened: <FaAngleUp />,
  },
  {
    title: "Reportes",
    path: "/reportes",
    icon: <FaRegChartBar />,
    iconClosed: <FaAngleDown />,
    iconOpened: <FaAngleUp />,
  },
  {
    title: "Configuracion",
    path: "/settings",
    icon: <FaCogs />,
    iconClosed: <FaAngleDown />,
    iconOpened: <FaAngleUp />,
  },
];
