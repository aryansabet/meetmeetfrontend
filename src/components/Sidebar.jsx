import React, { useContext, useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  useParams,
  useLocation,
  NavLink,
} from "react-router-dom";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import AddRoom from "../pages/Room/AddRoom";
import classNames from "../utils/classNames";
import Avatar200x200 from "../assets/images/200x200.png";
import AppLogo from "../assets/images/app-logo.svg";
import { useDispatch } from "react-redux";
import { ClosingSidebar, OpeningSidebar } from "../Redux/Action";

import PopOver from "./PopOver";
import PopOverContext from "../context/PopOverContext";
import { useClickOutside, useLogger } from "@mantine/hooks";
// TODO : ACTIVE SELECTION
// TODO : HOVER COLORIZE
// TODO : HOME BUTTON SHAPE CHANGES ON OVERFLOW ROOMS
// TODO : ROOMS HOVER HAVE PROBLEM

// TODO : ACTIVE NOTIF ON ROOMS
export default function Sidebar({ classes, children, ...restProps }) {
  const location = useLocation();
  useEffect(() => {
    document.body.classList.contains("is-sidebar-open") &&
      document.body.classList.remove("is-sidebar-open");
  }, [location]);
  return <div className="sidebar print:hidden">{children}</div>;
}

Sidebar.Primary = function PrimarySidebar({ classes, children, ...restProps }) {
  return (
    <div className={classNames("main-sidebar")}>
      <div className="flex h-full w-full flex-col items-center border-r border-slate-150 bg-white dark:border-navy-700 dark:bg-navy-800">
        {children}
      </div>
    </div>
  );
};
Sidebar.Primary.Logo = function SidebarLogo() {
  return (
    <div className="flex pt-4">
      <Link to={"/home"}>
        <img
          className="h-11 w-11 transition-transform duration-500 ease-in-out hover:rotate-[360deg]"
          src={AppLogo}
          alt="logo"
        />
      </Link>
    </div>
  );
};
Sidebar.Primary.Middle = function SidebarMiddlebar({
  classes,
  children,
  ...restProps
}) {
  return (
    <>
      <div className="is-scrollbar-hidden flex grow flex-col space-y-4 overflow-y-auto pt-6">
        {children}
      </div>
    </>
  );
};
Sidebar.Primary.Middle.Home = function PrimarySidebar({
  classes,
  children,
  ...restProps
}) {
  return (
    <Link
      to={"/home"}
      className="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
      // x-tooltip.placement.right="'Dashboards'"
    >
      <svg
        className="h-7 w-7"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          fillOpacity=".3"
          d="M5 14.059c0-1.01 0-1.514.222-1.945.221-.43.632-.724 1.453-1.31l4.163-2.974c.56-.4.842-.601 1.162-.601.32 0 .601.2 1.162.601l4.163 2.974c.821.586 1.232.88 1.453 1.31.222.43.222.935.222 1.945V19c0 .943 0 1.414-.293 1.707C18.414 21 17.943 21 17 21H7c-.943 0-1.414 0-1.707-.293C5 20.414 5 19.943 5 19v-4.94Z"
        />
        <path
          fill="currentColor"
          d="M3 12.387c0 .267 0 .4.084.441.084.041.19-.04.4-.204l7.288-5.669c.59-.459.885-.688 1.228-.688.343 0 .638.23 1.228.688l7.288 5.669c.21.163.316.245.4.204.084-.04.084-.174.084-.441v-.409c0-.48 0-.72-.102-.928-.101-.208-.291-.355-.67-.65l-7-5.445c-.59-.459-.885-.688-1.228-.688-.343 0-.638.23-1.228.688l-7 5.445c-.379.295-.569.442-.67.65-.102.208-.102.448-.102.928v.409Z"
        />
        <path
          fill="currentColor"
          d="M11.5 15.5h1A1.5 1.5 0 0 1 14 17v3.5h-4V17a1.5 1.5 0 0 1 1.5-1.5Z"
        />
        <path
          fill="currentColor"
          d="M17.5 5h-1a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5Z"
        />
      </svg>
    </Link>
  );
};
Sidebar.Primary.Middle.LaterThings = function PrimarySidebarLaterThings({
  classes,
  children,
  ...restProps
}) {
  return (
    <>
      {/* <!-- Dashobards --> */}
      <a
        href="#"
        className="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
        // x-tooltip.placement.right="'Dashboards'"
      >
        <svg
          className="h-7 w-7"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fillOpacity=".3"
            d="M5 14.059c0-1.01 0-1.514.222-1.945.221-.43.632-.724 1.453-1.31l4.163-2.974c.56-.4.842-.601 1.162-.601.32 0 .601.2 1.162.601l4.163 2.974c.821.586 1.232.88 1.453 1.31.222.43.222.935.222 1.945V19c0 .943 0 1.414-.293 1.707C18.414 21 17.943 21 17 21H7c-.943 0-1.414 0-1.707-.293C5 20.414 5 19.943 5 19v-4.94Z"
          />
          <path
            fill="currentColor"
            d="M3 12.387c0 .267 0 .4.084.441.084.041.19-.04.4-.204l7.288-5.669c.59-.459.885-.688 1.228-.688.343 0 .638.23 1.228.688l7.288 5.669c.21.163.316.245.4.204.084-.04.084-.174.084-.441v-.409c0-.48 0-.72-.102-.928-.101-.208-.291-.355-.67-.65l-7-5.445c-.59-.459-.885-.688-1.228-.688-.343 0-.638.23-1.228.688l-7 5.445c-.379.295-.569.442-.67.65-.102.208-.102.448-.102.928v.409Z"
          />
          <path
            fill="currentColor"
            d="M11.5 15.5h1A1.5 1.5 0 0 1 14 17v3.5h-4V17a1.5 1.5 0 0 1 1.5-1.5Z"
          />
          <path
            fill="currentColor"
            d="M17.5 5h-1a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5Z"
          />
        </svg>
      </a>

      {/* <!-- Apps --> */}
      <a
        href="apps-list.html"
        className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-navy-600 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
        // x-tooltip.placement.right="'Applications'"
      >
        <svg
          className="h-7 w-7"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 8H19V16C19 17.8856 19 18.8284 18.4142 19.4142C17.8284 20 16.8856 20 15 20H9C7.11438 20 6.17157 20 5.58579 19.4142C5 18.8284 5 17.8856 5 16V8Z"
            fill="currentColor"
            fillOpacity="0.3"
          />
          <path
            d="M12 8L11.7608 5.84709C11.6123 4.51089 10.4672 3.5 9.12282 3.5V3.5C7.68381 3.5 6.5 4.66655 6.5 6.10555V6.10555C6.5 6.97673 6.93539 7.79026 7.66025 8.2735L9.5 9.5"
            stroke="currentColor"
            strokeLinecap="round"
          />
          <path
            d="M12 8L12.2392 5.84709C12.3877 4.51089 13.5328 3.5 14.8772 3.5V3.5C16.3162 3.5 17.5 4.66655 17.5 6.10555V6.10555C17.5 6.97673 17.0646 7.79026 16.3397 8.2735L14.5 9.5"
            stroke="currentColor"
            strokeLinecap="round"
          />
          <rect x="4" y="8" width="16" height="3" rx="1" fill="currentColor" />
          <path d="M12 11V15" stroke="currentColor" strokeLinecap="round" />
        </svg>
      </a>

      {/* <!-- Pages And Layouts --> */}
      <a
        href="pages-card-user-1.html"
        className="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
        // x-tooltip.placement.right="'Pages & Layouts'"
      >
        <svg
          className="h-7 w-7"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.85714 3H4.14286C3.51167 3 3 3.51167 3 4.14286V9.85714C3 10.4883 3.51167 11 4.14286 11H9.85714C10.4883 11 11 10.4883 11 9.85714V4.14286C11 3.51167 10.4883 3 9.85714 3Z"
            fill="currentColor"
          />
          <path
            d="M9.85714 12.8999H4.14286C3.51167 12.8999 3 13.4116 3 14.0428V19.757C3 20.3882 3.51167 20.8999 4.14286 20.8999H9.85714C10.4883 20.8999 11 20.3882 11 19.757V14.0428C11 13.4116 10.4883 12.8999 9.85714 12.8999Z"
            fill="currentColor"
            fillOpacity="0.3"
          />
          <path
            d="M19.757 3H14.0428C13.4116 3 12.8999 3.51167 12.8999 4.14286V9.85714C12.8999 10.4883 13.4116 11 14.0428 11H19.757C20.3882 11 20.8999 10.4883 20.8999 9.85714V4.14286C20.8999 3.51167 20.3882 3 19.757 3Z"
            fill="currentColor"
            fillOpacity="0.3"
          />
          <path
            d="M19.757 12.8999H14.0428C13.4116 12.8999 12.8999 13.4116 12.8999 14.0428V19.757C12.8999 20.3882 13.4116 20.8999 14.0428 20.8999H19.757C20.3882 20.8999 20.8999 20.3882 20.8999 19.757V14.0428C20.8999 13.4116 20.3882 12.8999 19.757 12.8999Z"
            fill="currentColor"
            fillOpacity="0.3"
          />
        </svg>
      </a>

      {/* <!-- Forms --> */}
      <a
        href="form-input-text.html"
        className="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
        // x-tooltip.placement.right="'Forms'"
      >
        <svg
          className="h-7 w-7"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillOpacity="0.25"
            d="M21.0001 16.05V18.75C21.0001 20.1 20.1001 21 18.7501 21H6.6001C6.9691 21 7.3471 20.946 7.6981 20.829C7.7971 20.793 7.89609 20.757 7.99509 20.712C8.31009 20.586 8.61611 20.406 8.88611 20.172C8.96711 20.109 9.05711 20.028 9.13811 19.947L9.17409 19.911L15.2941 13.8H18.7501C20.1001 13.8 21.0001 14.7 21.0001 16.05Z"
            fill="currentColor"
          />
          <path
            fillOpacity="0.5"
            d="M17.7324 11.361L15.2934 13.8L9.17334 19.9111C9.80333 19.2631 10.1993 18.372 10.1993 17.4V8.70601L12.6384 6.26701C13.5924 5.31301 14.8704 5.31301 15.8244 6.26701L17.7324 8.17501C18.6864 9.12901 18.6864 10.407 17.7324 11.361Z"
            fill="currentColor"
          />
          <path
            d="M7.95 3H5.25C3.9 3 3 3.9 3 5.25V17.4C3 17.643 3.02699 17.886 3.07199 18.12C3.09899 18.237 3.12599 18.354 3.16199 18.471C3.20699 18.606 3.252 18.741 3.306 18.867C3.315 18.876 3.31501 18.885 3.31501 18.885C3.32401 18.885 3.32401 18.885 3.31501 18.894C3.44101 19.146 3.585 19.389 3.756 19.614C3.855 19.731 3.95401 19.839 4.05301 19.947C4.15201 20.055 4.26 20.145 4.377 20.235L4.38601 20.244C4.61101 20.415 4.854 20.559 5.106 20.685C5.115 20.676 5.11501 20.676 5.11501 20.685C5.25001 20.748 5.385 20.793 5.529 20.838C5.646 20.874 5.76301 20.901 5.88001 20.928C6.11401 20.973 6.357 21 6.6 21C6.969 21 7.347 20.946 7.698 20.829C7.797 20.793 7.89599 20.757 7.99499 20.712C8.30999 20.586 8.61601 20.406 8.88601 20.172C8.96701 20.109 9.05701 20.028 9.13801 19.947L9.17399 19.911C9.80399 19.263 10.2 18.372 10.2 17.4V5.25C10.2 3.9 9.3 3 7.95 3ZM6.6 18.75C5.853 18.75 5.25 18.147 5.25 17.4C5.25 16.653 5.853 16.05 6.6 16.05C7.347 16.05 7.95 16.653 7.95 17.4C7.95 18.147 7.347 18.75 6.6 18.75Z"
            fill="currentColor"
          />
        </svg>
      </a>

      {/* <!-- Components --> */}
      <a
        href="components-accordion.html"
        className="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
        // x-tooltip.placement.right="'Components'"
      >
        <svg
          className="h-7 w-7"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillOpacity="0.5"
            d="M14.2498 16C14.2498 17.5487 13.576 18.9487 12.4998 19.9025C11.5723 20.7425 10.3473 21.25 8.99976 21.25C6.10351 21.25 3.74976 18.8962 3.74976 16C3.74976 13.585 5.39476 11.5375 7.61726 10.9337C8.22101 12.4562 9.51601 13.6287 11.1173 14.0662C11.5548 14.1887 12.0185 14.25 12.4998 14.25C12.981 14.25 13.4448 14.1887 13.8823 14.0662C14.1185 14.6612 14.2498 15.3175 14.2498 16Z"
            fill="currentColor"
          />
          <path
            d="M17.75 9.00012C17.75 9.68262 17.6187 10.3389 17.3825 10.9339C16.7787 12.4564 15.4837 13.6289 13.8825 14.0664C13.445 14.1889 12.9813 14.2501 12.5 14.2501C12.0187 14.2501 11.555 14.1889 11.1175 14.0664C9.51625 13.6289 8.22125 12.4564 7.6175 10.9339C7.38125 10.3389 7.25 9.68262 7.25 9.00012C7.25 6.10387 9.60375 3.75012 12.5 3.75012C15.3962 3.75012 17.75 6.10387 17.75 9.00012Z"
            fill="currentColor"
          />
          <path
            fillOpacity="0.3"
            d="M21.25 16C21.25 18.8962 18.8962 21.25 16 21.25C14.6525 21.25 13.4275 20.7425 12.5 19.9025C13.5763 18.9487 14.25 17.5487 14.25 16C14.25 15.3175 14.1187 14.6612 13.8825 14.0662C15.4837 13.6287 16.7787 12.4562 17.3825 10.9337C19.605 11.5375 21.25 13.585 21.25 16Z"
            fill="currentColor"
          />
        </svg>
      </a>

      {/* <!-- Elements --> */}
      <a
        href="elements-avatar.html"
        className="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
        // x-tooltip.placement.right="'Elements'"
      >
        <svg
          className="h-7 w-7"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3111 14.75H5.03356C3.36523 14.75 2.30189 12.9625 3.10856 11.4958L5.24439 7.60911L7.24273 3.96995C8.07689 2.45745 10.2586 2.45745 11.0927 3.96995L13.1002 7.60911L14.0627 9.35995L15.2361 11.4958C16.0427 12.9625 14.9794 14.75 13.3111 14.75Z"
            fill="currentColor"
          />
          <path
            fillOpacity="0.3"
            d="M21.1667 15.2083C21.1667 18.4992 18.4992 21.1667 15.2083 21.1667C11.9175 21.1667 9.25 18.4992 9.25 15.2083C9.25 15.0525 9.25917 14.9058 9.26833 14.75H13.3108C14.9792 14.75 16.0425 12.9625 15.2358 11.4958L14.0625 9.36C14.4292 9.28666 14.8142 9.25 15.2083 9.25C18.4992 9.25 21.1667 11.9175 21.1667 15.2083Z"
            fill="currentColor"
          />
        </svg>
      </a>
      <ul className="mt-2 flex flex-col items-center justify-center space-y-1">
        <li>
          <a
            href="#"
            className="btn h-10 w-10 p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5.5 w-5.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="btn h-10 w-10 p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5.5 w-5.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </a>
        </li>
      </ul>
    </>
  );
};
Sidebar.Primary.Middle.Rooms = function PrimaryRoomsSections({
  classes,
  children,
  ...restProps
}) {
  return <div className="flex flex-col">{children}</div>;
};
Sidebar.Primary.Middle.Rooms.LoadItems = function LoaderRoomsItems({
  classes,
  children,
  ...restProps
}) {
  let authTokens = useContext(AuthContext).authTokens;
  const [myrooms, setMyRooms] = useState([]);
  const req = async () => {
    const { data } = await axios
      .get(`/api/my-rooms`)
      .then((response) => response);
    console.log("roomDataFetch", data);
    setMyRooms(data);
  };
  useEffect(() => {
    req();
  }, []);
  return (
    <>
      {myrooms?.map((item) => (
        <Sidebar.Primary.Middle.Rooms.Item item={item} key={item.title} />
      ))}
    </>
  );
};
Sidebar.Primary.Middle.Rooms.Item = function PrimaryRoomsItems({
  classes,
  item,
  children,
  ...restProps
}) {
  return (
    <>
      <div
        // @click="$dispatch('change-active-chat',{chatId:'chat-2',avatar_url:'images/200x200.png',name:'Konnor Guzman'})"
        className="flex cursor-pointer items-center justify-center py-2.5 "
      >
        <NavLink to={`/room/${item.id}`}>
          {({ isActive, isPending }) => (
            <div className="avatar h-10 w-10">
              <img
                className={classNames(
                  "rounded-full",
                  "hover:border-primary hover:border-2  hover:shadow-soft",
                  "hover:shadow-primary-focus/40 dark:hover:shadow-primary-focus/80",
                  isActive &&
                    "border-info border-2 shadow-soft shadow-info-focus/40"
                )}
                src={
                  item.main_picture_path === "" ||
                  item.main_picture_path === "__"
                    ? Avatar200x200
                    : item.main_picture_path
                }
                alt="avatar"
              />
            </div>
          )}
        </NavLink>
      </div>
    </>
  );
};
Sidebar.Primary.Middle.Rooms.AddRoom = function AddRoomButton({
  classes,
  children,
  ...restProps
}) {
  return (
    <>
      <AddRoom />
    </>
  );
};
Sidebar.Primary.Middle.Rooms.AllItem = function PrimaryRoomsAllitems({
  classes,
  children,
  ...restProps
}) {
  return (
    <>
      {" "}
      <div
        // @click="$dispatch('change-active-chat',{chatId:'chat-1',avatar_url:'images/200x200.png',name:'Alfredo Elliott'})"
        className="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
      >
        <div className="avatar h-10 w-10">
          <img className="rounded-full" src={Avatar200x200} alt="avatar" />
          <div className="absolute right-0 h-3 w-3 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"></div>
        </div>
      </div>
      <div
        // @click="$dispatch('change-active-chat',{chatId:'chat-1',avatar_url:'images/200x200.png',name:'Alfredo Elliott'})"
        className="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
      >
        <div className="avatar h-10 w-10">
          <img className="rounded-full" src={Avatar200x200} alt="avatar" />
          <div className="absolute right-0 h-3 w-3 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"></div>
        </div>
      </div>
      <div
        // @click="$dispatch('change-active-chat',{chatId:'chat-1',avatar_url:'images/200x200.png',name:'Alfredo Elliott'})"
        className="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
      >
        <div className="avatar h-10 w-10">
          <img className="rounded-full" src={Avatar200x200} alt="avatar" />
          <div className="absolute right-0 h-3 w-3 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"></div>
        </div>
      </div>
      <div
        // @click="$dispatch('change-active-chat',{chatId:'chat-1',avatar_url:'images/200x200.png',name:'Alfredo Elliott'})"
        className="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
      >
        <div className="avatar h-10 w-10">
          <img className="rounded-full" src={Avatar200x200} alt="avatar" />
          <div className="absolute right-0 h-3 w-3 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"></div>
        </div>
      </div>
      <div
        // @click="$dispatch('change-active-chat',{chatId:'chat-1',avatar_url:'images/200x200.png',name:'Alfredo Elliott'})"
        className="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
      >
        <div className="avatar h-10 w-10">
          <img className="rounded-full" src={Avatar200x200} alt="avatar" />
          <div className="absolute right-0 h-3 w-3 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"></div>
        </div>
      </div>
      <div
        // @click="$dispatch('change-active-chat',{chatId:'chat-2',avatar_url:'images/200x200.png',name:'Konnor Guzman'})"
        className="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
      >
        <div className="avatar h-10 w-10">
          <img className="rounded-full" src={Avatar200x200} alt="avatar" />
        </div>
      </div>
      <div
        // @click="$dispatch('change-active-chat',{chatId:'chat-3',avatar_url:'images/200x200.png',name:'Travis Fuller'})"
        className="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
      >
        <div className="avatar h-10 w-10">
          <img className="rounded-full" src={Avatar200x200} alt="avatar" />

          <div className="absolute right-0 h-3 w-3 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-80 dark:bg-accent"></span>
          </div>
        </div>
      </div>
      <div
        // @click="$dispatch('change-active-chat',{chatId:'chat-1',avatar_url:'images/200x200.png',name:'Derrick Simmons'})"
        className="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
      >
        <div className="avatar h-10 w-10">
          <img className="rounded-full" src={Avatar200x200} alt="avatar" />
          <div className="absolute right-0 h-3 w-3 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"></div>
        </div>
      </div>
    </>
  );
};

Sidebar.Primary.Bottom = function SidebarBottomSection({ children }) {
  return (
    <div className="flex flex-col items-center space-y-3 py-3">{children}</div>
  );
};
Sidebar.Primary.Bottom.Settings = function SidebarSettings() {
  return (
    <a
      href="#"
      className="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
    >
      <svg
        className="h-7 w-7"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillOpacity="0.3"
          fill="currentColor"
          d="M2 12.947v-1.771c0-1.047.85-1.913 1.899-1.913 1.81 0 2.549-1.288 1.64-2.868a1.919 1.919 0 0 1 .699-2.607l1.729-.996c.79-.474 1.81-.192 2.279.603l.11.192c.9 1.58 2.379 1.58 3.288 0l.11-.192c.47-.795 1.49-1.077 2.279-.603l1.73.996a1.92 1.92 0 0 1 .699 2.607c-.91 1.58-.17 2.868 1.639 2.868 1.04 0 1.899.856 1.899 1.912v1.772c0 1.047-.85 1.912-1.9 1.912-1.808 0-2.548 1.288-1.638 2.869.52.915.21 2.083-.7 2.606l-1.729.997c-.79.473-1.81.191-2.279-.604l-.11-.191c-.9-1.58-2.379-1.58-3.288 0l-.11.19c-.47.796-1.49 1.078-2.279.605l-1.73-.997a1.919 1.919 0 0 1-.699-2.606c.91-1.58.17-2.869-1.639-2.869A1.911 1.911 0 0 1 2 12.947Z"
        />
        <path
          fill="currentColor"
          d="M11.995 15.332c1.794 0 3.248-1.464 3.248-3.27 0-1.807-1.454-3.272-3.248-3.272-1.794 0-3.248 1.465-3.248 3.271 0 1.807 1.454 3.271 3.248 3.271Z"
        />
      </svg>
    </a>
  );
};
// Sidebar.Primary.Bottom.LogOut = function SidebarLogOut() {
//     let { logoutUser } = useContext(AuthContext);
//     return (
//         <a
//             onClick={logoutUser}
//             className="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
//         >
//             <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-7 w-7"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//             >
//                 <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="1.5"
//                     d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
//                 ></path>
//             </svg>
//         </a>
//     );
// };

Sidebar.Primary.Bottom.Profile = function SidebarProfile() {
  let { logoutUser } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  let authTokens = useContext(AuthContext).authTokens;
  const toggle = () => {
    setShow((cur) => !cur);
    // console.log(show);
  };

  const [data, setData] = useState({});

  const fetchData = async () => {
    try {
      const { data } = await axios
        .get("/api/profile")
        .then((response) => response);
      setData(data);
      console.log("man", data.usertype);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const profile_box = useClickOutside(() => setShow(false));
  return (
    <>
      <PopOver
        Show={show}
        popperConfigs={{ placement: "right-end", offset: 12 }}
      >
        <PopOverContext.Consumer>
          {({
            referenceElement,
            setReferenceElement,
            popperElement,
            setPopperElement,
            arrowElement,
            setArrowElement,
            styles,
            attributes,
            Show,
          }) => (
            <>
              <button
                onClick={toggle}
                ref={setReferenceElement}
                className="avatar h-12 w-12 mt-[30%]"
              >
                <img
                  className="rounded-full"
                  src={
                    data.picture_path &&
                    data.picture_path != "" &&
                    data.picture_path != "__"
                      ? data.picture_path
                      : Avatar200x200
                  }
                  alt="avatar"
                />

                <span className="absolute right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-success dark:border-navy-700"></span>
              </button>
              {/* <button
                                    // @click="isShowPopper = !isShowPopper"
                                    x-ref="popperRef"
                                    className="avatar h-12 w-12"
                                    onClick={() => navigate("/profile")}
                                >

                                    <img className="rounded-full"
                                        src={data.picture_path && data.picture_path!="" && data.picture_path!="__" ? data.picture_path :Avatar200x200}

                                        alt="avatar"
                                    />

                                    <span
                                        className="absolute right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-success dark:border-navy-700"></span>
                                </button> */}
              <div
                className={classNames("popper-root fixed", Show && "show")}
                ref={setPopperElement}
                style={styles.popper}
                {...attributes.popper}
              >
                <div
                  ref={profile_box}
                  className="popper-box w-64 rounded-lg border text-left border-slate-150 bg-white shadow-soft dark:border-navy-600 dark:bg-navy-700"
                >
                  <div className="flex items-center space-x-4 rounded-t-lg bg-slate-100 py-5 px-4 dark:bg-navy-800">
                    <div className="avatar h-14 w-14">
                      <img
                        className="rounded-full"
                        src={
                          data.picture_path &&
                          data.picture_path != "" &&
                          data.picture_path != "__"
                            ? data.picture_path
                            : Avatar200x200
                        }
                        alt="avatar"
                      />
                    </div>
                    <div>
                      <a
                        href="#"
                        className="text-base font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                      >
                        {data.first_name} {data.last_name}
                      </a>
                      <p className="text-xs text-slate-400 dark:text-navy-300">
                        {data.bio}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col pt-2 pb-5">
                    <Link
                      to={"/profile"}
                      className="group flex items-center space-x-3 py-2 px-4 tracking-wide outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-warning text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4.5 w-4.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>

                      <div>
                        <h2 className="font-medium text-slate-700 transition-colors group-hover:text-primary group-focus:text-primary dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light">
                          Profile
                        </h2>
                        <div className="text-xs text-slate-400 line-clamp-1 dark:text-navy-300">
                          Your profile setting
                        </div>
                      </div>
                    </Link>
                    {/* <a
                                                href="#"
                                                className="group flex items-center space-x-3 py-2 px-4 tracking-wide outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                                            >
                                                <div
                                                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-info text-white"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-4.5 w-4.5"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                                        />
                                                    </svg>
                                                </div>

                                                <div>
                                                    <h2
                                                        className="font-medium text-slate-700 transition-colors group-hover:text-primary group-focus:text-primary dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light"
                                                    >
                                                        Messages
                                                    </h2>
                                                    <div
                                                        className="text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                                                    >
                                                        Your messages and tasks
                                                    </div>
                                                </div>
                                            </a>*/}
                    <Link
                      to={"/subscribtion"}
                      className="group flex items-center space-x-3 py-2 px-4 tracking-wide outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                          />
                        </svg>
                      </div>

                      <div>
                        <h2 class="font-medium text-slate-700 transition-colors group-hover:text-primary group-focus:text-primary dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light">
                          {data.usertype == 1 ? "Pricing Page" : "Premium"}
                        </h2>
                        <div className="text-xs text-slate-400 line-clamp-1 dark:text-navy-300">
                          Your team activity
                        </div>
                      </div>
                    </Link>
                    {/* <a
                                                href="#"
                                                className="group flex items-center space-x-3 py-2 px-4 tracking-wide outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                                            >
                                                <div
                                                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-error text-white"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-4.5 w-4.5"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                        />
                                                    </svg>
                                                </div>

                                                <div>
                                                    <h2
                                                        className="font-medium text-slate-700 transition-colors group-hover:text-primary group-focus:text-primary dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light"
                                                    >
                                                        Activity
                                                    </h2>
                                                    <div
                                                        className="text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                                                    >
                                                        Your activity and events
                                                    </div>
                                                </div>
                                            </a> */}
                    {/* <a
                                                href="http://localhost:3000/profileEdit"
                                                className="group flex items-center space-x-3 py-2 px-4 tracking-wide outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                                            >
                                                <div
                                                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-success text-white"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-4.5 w-4.5"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                                        />
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                        />
                                                    </svg>
                                                </div>

                                                <div>
                                                    <h2
                                                        className="font-medium text-slate-700 transition-colors group-hover:text-primary group-focus:text-primary dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light"
                                                    >
                                                        Settings
                                                    </h2>
                                                    <div
                                                        className="text-xs text-slate-400 line-clamp-1 dark:text-navy-300"
                                                    >
                                                        Webapp settings
                                                    </div>
                                                </div>
                                            </a> */}
                    <div className="mt-3 px-4">
                      <button
                        onClick={logoutUser}
                        className="btn h-9 w-full space-x-2 bg-primary text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          />
                        </svg>
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </PopOverContext.Consumer>
      </PopOver>
    </>
  );
};

Sidebar.Secondary = function ({ classes, children, ...restProps }) {
  return <>{children}</>;
};
Sidebar.Secondary.Expanded = function ({ classes, children, ...restProps }) {
  return (
    <div className="sidebar-panel">
      <div className="flex h-full grow flex-col bg-white pl-[var(--main-sidebar-width)] dark:bg-navy-750">
        {children}
      </div>
    </div>
  );
};
Sidebar.Secondary.Expanded.Header = function ({
  classes,
  children,
  ...restProps
}) {
  return (
    <div className="flex h-18 w-full items-center justify-between pl-4 pr-1">
      {children}
    </div>
  );
};
Sidebar.Secondary.Expanded.Header.Title = function ({
  classes,
  children,
  ...restProps
}) {
  return <div className="flex items-center">{children}</div>;
};
Sidebar.Secondary.Expanded.Header.Title.Text = function ({
  classes,
  children,
  ...restProps
}) {
  return (
    <p className="text-lg font-medium tracking-wider text-slate-800 dark:text-navy-100">
      {children}
    </p>
  );
};
Sidebar.Secondary.Expanded.Header.Title.Icon = function () {
  return (
    <div className="avatar mr-3 hidden h-9 w-9 lg:flex">
      <div className="is-initial rounded-full bg-info/10 text-info">
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5293 18L20.9999 8.40002"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 13.2L7.23529 18L17.8235 6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};
Sidebar.Secondary.Expanded.Header.MinimizeButton = function Minimizebutton({
  classes,
  children,
  ...restProps
}) {
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);
  !document.body.classList.contains("is-sidebar-open")
    ? document.body.classList.add("is-sidebar-open")
    : document.body.classList.remove("is-sidebar-open");
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        setSidebarExpanded((curr) => !curr);
      }}
      className="btn h-7 w-7 rounded-full p-0 text-primary hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent-light/80 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 xl:hidden"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
};
Sidebar.Secondary.Expanded.Body = function ({
  classes,
  children,
  ...restProps
}) {
  return (
    <div className="flex h-[calc(100%-4.5rem)] grow flex-col">{children}</div>
  );
};
Sidebar.Secondary.Expanded.Body.Tabs = function ({
  classes,
  children,
  ...restProps
}) {
  return (
    <div className="flex shrink-0 justify-between px-1.5 py-1">{children}</div>
  );
};
Sidebar.Secondary.Expanded.Body.Tabs.Chat = function ChatDokma({
  classes,
  children,
  ...restProps
}) {
  const { idroom } = useParams();

  //console.log(idroom);
  const dispatch = useDispatch();
  localStorage.setItem("sidebar", "true");
  return (
    <Link
      to={`/room/${idroom}/chat`}
      x-tooltip="'Chat App'"
      className="btn h-9 w-9 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    </Link>
  );
};
Sidebar.Secondary.Expanded.Body.Tabs.Todo = function TodoDokma({
  classes,
  children,
  ...restProps
}) {
  const { idroom } = useParams();
  //console.log(idroom);
  return (
    <Link
      to={`/room/${idroom}/task`}
      x-tooltip="'Chat App'"
      className="btn h-9 w-9 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
    >
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5293 18L20.9999 8.40002"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M3 13.2L7.23529 18L17.8235 6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </Link>
  );
};
Sidebar.Secondary.Expanded.Body.Tabs.InfoTab = function InfoDokma({
  classes,
  children,
  ...restProps
}) {
  const { idroom } = useParams();
  //console.log(idroom);
  return (
    <Link
      to={`/room/${idroom}/info`}
      x-tooltip="'Chat App'"
      className="btn h-9 w-9 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
    >
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
        />
      </svg>
    </Link>
  );
};
Sidebar.Secondary.Expanded.Body.Tabs.AllItems = function ({
  classes,
  children,
  ...restProps
}) {
  return (
    <>
      <a
        href="apps-mail.html"
        x-tooltip="'Mail App'"
        className="btn h-9 w-9 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </a>
      <a
        href="apps-kanban.html"
        x-tooltip="'Kanban App'"
        className="btn h-9 w-9 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
          />
        </svg>
      </a>
      <a
        href="apps-chat.html"
        x-tooltip="'Chat App'"
        className="btn h-9 w-9 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </a>
      <a
        href="apps-pos.html"
        x-tooltip="'POS App'"
        className="btn h-9 w-9 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </a>
      <a
        href="apps-filemanager.html"
        x-tooltip="'File Manager App'"
        className="btn h-9 w-9 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
          />
        </svg>
      </a>
    </>
  );
};
Sidebar.Secondary.Expanded.Body.Middle = function ({
  classes,
  children,
  ...restProps
}) {
  return (
    <div className="is-scrollbar-hidden grow overflow-y-auto">{children}</div>
  );
};
Sidebar.Secondary.Expanded.Body.Middle.TopButton = function ({
  classes,
  children,
  ...restProps
}) {
  return (
    <div className="mt-2 px-4">
      <button className="btn w-full space-x-2 rounded-full border border-slate-200 py-2 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-500 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
        <span> New Task </span>
      </button>
    </div>
  );
};
Sidebar.Secondary.Expanded.Body.Middle.Items = function ({
  classes,
  children,
  ...restProps
}) {
  return (
    <ul className="mt-5 space-y-1.5 px-2 font-inter text-xs+ font-medium">
      {children}
    </ul>
  );
};
Sidebar.Secondary.Expanded.Body.Middle.Items.Item = function ({
  classes,
  children,
  ...restProps
}) {
  return <li>{children}</li>;
};
Sidebar.Secondary.Expanded.Body.Middle.Items.AllItem = function ({
  classes,
  children,
  ...restProps
}) {
  return (
    <>
      <li>
        <a
          className="group flex space-x-2 rounded-lg bg-primary/10 p-2 tracking-wide text-primary outline-none transition-all dark:bg-accent-light/10 dark:text-accent-light"
          href="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4.5 w-4.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <span>My Day</span>
        </a>
      </li>
      <li>
        <a
          className="group flex space-x-2 rounded-lg p-2 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
          href="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
          <span>Important</span>
        </a>
      </li>
      <li>
        <a
          className="group flex space-x-2 rounded-lg p-2 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
          href="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span>Task</span>
        </a>
      </li>
      <li>
        <a
          className="group flex space-x-2 rounded-lg p-2 tracking-wide text-slate-800 outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:text-navy-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
          href="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <span>Assigned</span>
        </a>
      </li>
      <li>
        <a
          className="group flex space-x-2 rounded-lg p-2 tracking-wide text-error outline-none transition-all hover:bg-error/20 focus:bg-error/20"
          href="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4.5 w-4.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          <span>Deleted</span>
        </a>
      </li>
    </>
  );
};
Sidebar.Secondary.Expanded.Body.Middle.Divider = function ({
  classes,
  children,
  ...restProps
}) {
  return <div className="my-4 mx-4 h-px bg-slate-200 dark:bg-navy-500"></div>;
};
Sidebar.Secondary.Expanded.Body.Middle.SectionHeader = function ({
  classes,
  children,
  ...restProps
}) {
  return (
    <>
      <div className="flex items-center justify-between px-4">
        <span className="text-xs font-medium uppercase">Priority</span>
        {/* <div className="-mr-1.5 flex">
          <button className="btn h-6 w-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          <div
            x-data="usePopper({placement:'bottom-end',offset:4})"
            // @click.outside="isShowPopper && (isShowPopper = false)"
            className="inline-flex"
          >
            <button
              x-ref="popperRef"
              // @click="isShowPopper = !isShowPopper"
              className="btn h-6 w-6 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </button>

            <div
              x-ref="popperRoot"
              className="popper-root"
              // :className="isShowPopper && 'show'"
            >
              <div className="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
                <ul>
                  <li>
                    <a
                      href="#"
                      className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    >
                      Action
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    >
                      Another Action
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    >
                      Something else
                    </a>
                  </li>
                </ul>
                <div className="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
                <ul>
                  <li>
                    <a
                      href="#"
                      className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                    >
                      Separated Link
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};
Sidebar.Secondary.Expanded.Body.Middle.Items.AllLabelItems = function ({
  classes,
  children,
  ...restProps
}) {
  return (
    <>
      <li>
        <a
          className="group flex space-x-2 rounded-lg p-2 tracking-wide outline-none transition-all hover:bg-success/20 focus:bg-success/20"
          href="#"
        >
          <svg
            className="h-4.5 w-4.5 text-success"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 6H21M7 12H21M7 18H21"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 6H4M3 12H4M3 18H4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-slate-800 dark:text-navy-100">Low</span>
        </a>
      </li>
      <li>
        <a
          className="group flex space-x-2 rounded-lg p-2 tracking-wide outline-none transition-all hover:bg-warning/20 focus:bg-warning/20"
          href="#"
        >
          <svg
            className="h-4.5 w-4.5 text-warning"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 6H21M7 12H21M7 18H21"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 6H4M3 12H4M3 18H4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-slate-800 dark:text-navy-100">Medium</span>
        </a>
      </li>
      <li>
        <a
          className="group flex space-x-2 rounded-lg p-2 tracking-wide outline-none transition-all hover:bg-error/20 focus:bg-error/20"
          href="#"
        >
          <svg
            className="h-4.5 w-4.5 text-error"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 6H21M7 12H21M7 18H21"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 6H4M3 12H4M3 18H4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-slate-800 dark:text-navy-100">High</span>
        </a>
      </li>
      <li>
        <a
          className="group flex space-x-2 rounded-lg p-2 tracking-wide outline-none transition-all hover:bg-info/20 focus:bg-info/20"
          href="#"
        >
          <svg
            className="h-4.5 w-4.5 text-info"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 6H21M7 12H21M7 18H21"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 6H4M3 12H4M3 18H4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-slate-800 dark:text-navy-100">Update</span>
        </a>
      </li>
    </>
  );
};
Sidebar.Secondary.Minimized = function ({ classes, children, ...restProps }) {
  return (
    <div className="sidebar-panel-min">
      <div className="flex h-full flex-col items-center bg-white dark:bg-navy-750">
        {children}
      </div>
    </div>
  );
};
Sidebar.Secondary.Minimized.Header = function ({
  classes,
  children,
  ...restProps
}) {
  return (
    <div className="flex h-18 shrink-0 items-center justify-center">
      <div className="avatar flex h-10 w-10 rounded-full bg-info/10 text-info">
        <div className="is-initial">
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5293 18L20.9999 8.40002"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 13.2L7.23529 18L17.8235 6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

Sidebar.Secondary.Minimized.Body = function ({
  classes,
  children,
  ...restProps
}) {
  return (
    <div className="flex h-[calc(100%-4.5rem)] grow flex-col">{children}</div>
  );
};

Sidebar.Secondary.Minimized.Body.Middle = function ({
  classes,
  children,
  ...restProps
}) {
  return (
    <div className="is-scrollbar-hidden flex grow flex-col overflow-y-auto">
      <ul className="mt-4 space-y-1">
        <li>
          <a
            href="#"
            className="btn h-10 w-10 bg-primary/10 p-0 font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5.5 w-5.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="btn h-10 w-10 p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5.5 w-5.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="btn h-10 w-10 p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5.5 w-5.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="btn h-10 w-10 p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5.5 w-5.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="btn h-10 w-10 p-0 text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5.5 w-5.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </a>
        </li>
      </ul>
      <div className="my-4 h-px bg-slate-200 dark:bg-navy-500"></div>
      <ul className="space-y-1">
        <li>
          <a
            href="#"
            className="btn h-10 w-10 p-0 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25"
          >
            <svg
              className="h-5.5 w-5.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 6H21M7 12H21M7 18H21"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 6H4M3 12H4M3 18H4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="btn h-10 w-10 p-0 text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25"
          >
            <svg
              className="h-5.5 w-5.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 6H21M7 12H21M7 18H21"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 6H4M3 12H4M3 18H4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="btn h-10 w-10 p-0 text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25"
          >
            <svg
              className="h-5.5 w-5.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 6H21M7 12H21M7 18H21"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 6H4M3 12H4M3 18H4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="btn h-10 w-10 p-0 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
          >
            <svg
              className="h-5.5 w-5.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 6H21M7 12H21M7 18H21"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 6H4M3 12H4M3 18H4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};
Sidebar.Secondary.Minimized.Body.MoreActions = function ({
  classes,
  children,
  ...restProps
}) {
  return (
    <div className="py-3">
      <div
        x-data="usePopper({placement:'right-start',offset:4})"
        // @click.outside="isShowPopper && (isShowPopper = false)"
        className="inline-flex"
      >
        <button
          x-ref="popperRef"
          // @click="isShowPopper = !isShowPopper"
          className="btn h-10 w-10 rounded-full border border-slate-300 p-0 font-medium hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </button>

        <template x-teleport="#x-teleport-target">
          <div
            x-ref="popperRoot"
            className="popper-root"
            // :className="isShowPopper && 'show'"
          >
            <div className="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
              <ul>
                <li>
                  <a
                    href="#"
                    className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                  >
                    Another Action
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                  >
                    Something else
                  </a>
                </li>
              </ul>
              <div className="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
              <ul>
                <li>
                  <a
                    href="#"
                    className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                  >
                    Separated Link
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </template>
      </div>
    </div>
  );
};
