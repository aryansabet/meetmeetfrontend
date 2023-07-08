import React, { useState, useEffect, useContext } from "react";
// import { Route, Link, Routes } from "react-router-dom";
import axios from "axios";

import "../../index.css";
import AuthContext from "../../context/AuthContext";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import MainSection from "../../components/MainSection";
import PageWrapper from "../../components/PageWrapper";
import DarkModeToggle from "../../components/DarkModeToggle";
// import { useNavigate } from 'react-router-dom';
// import axios from "axios";
import { CheckIcon } from '@heroicons/react/24/outline';

const pricing = {
    tiers: [
        {
            title: 'Freelancer',
            price: 24,
            frequency: '/month',
            description: 'The essentials to provide your best work for clients.',
            features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
            cta: 'Monthly billing',
            mostPopular: false,
        },
        
        
    ],
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Subscribtion = () => {
    const { authTokens, user } = useContext(AuthContext);
    const [data, setData] = useState({});
    const handleGetAccess = async () => {
        try {
            await axios
                .put("api/premium");
                

        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
        <PageWrapper>
        <Header>
          <Header.Items>
            {/* <Header.SidebarToggle /> */}
            <Header.Right>
                <Header.Right.DarkModeToggle />
                <Header.Right.Notification/>
            </Header.Right>
          </Header.Items>
        </Header>
        <Sidebar>
          <Sidebar.Primary>
            <Sidebar.Primary.Logo />
            <Sidebar.Primary.Middle>
              <Sidebar.Primary.Middle.Home />
              {/* <Sidebar.Primary.Middle.LaterThings/> */}
              <Sidebar.Secondary.Expanded.Body.Middle.Divider />
              <Sidebar.Primary.Middle.Rooms>
                {/* <Sidebar.Primary.Middle.Rooms.Item /> */}
                <Sidebar.Primary.Middle.Rooms.LoadItems />
                <Sidebar.Primary.Middle.Rooms.AddRoom />

                {/* <Sidebar.Primary.Middle.Rooms.AllItem/> */}
              </Sidebar.Primary.Middle.Rooms>
            </Sidebar.Primary.Middle>
            <Sidebar.Primary.Bottom>
              {/* <Sidebar.Primary.Bottom.LogOut /> */}
              <Sidebar.Primary.Bottom.Profile />
            </Sidebar.Primary.Bottom>
          </Sidebar.Primary>
        </Sidebar>
        <MainSection>
        <div className="mx-auto max-w-7xl  py-24 px-4 sm:px-6 lg:px-8 card dark:bg-navy-800">
                        <h2 className="text-3xl font-bold tracking-tight  sm:text-5xl sm:leading-none lg:text-6xl">
                        Premium
                        </h2>
                        <p className="mt-6 max-w-2xl text-xl text-gray-500">
                        With the premium feature, you get the ability to expand the number of people in your group, and also display your event in a unique way, in a way that will be completely different and attract the opinion of other people.
                        </p>

                        {/* Tiers */}
                        {/* <div className="mt-24 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
                            {pricing.tiers.map((tier) => (
                                <div
                                    key={tier.title}
                                    className="relative flex flex-col rounded-2xl border border-gray-200  p-8 shadow-sm"
                                >
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold ">{tier.title}</h3>
                                        {tier.mostPopular ? (
                                            <p className="absolute top-0 -translate-y-1/2 transform rounded-full bg-primary py-1.5 px-4 text-sm font-semibold text-white">
                                                Most popular
                                            </p>
                                        ) : null}
                                        <p className="mt-4 flex items-baseline ">
                                            <span className="text-5xl font-bold tracking-tight">${tier.price}</span>
                                            <span className="ml-1 text-xl font-semibold">{tier.frequency}</span>
                                        </p>
                                        <p className="mt-6 ">{tier.description}</p>

                                        <ul role="list" className="mt-6 space-y-6">
                                            {tier.features.map((feature) => (
                                                <li key={feature} className="flex">
                                                    <CheckIcon className="h-6 w-6 flex-shrink-0 text-indigo-500" aria-hidden="true" />
                                                    <span className="ml-3 ">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <a
                                        href="#"
                                        className={classNames(
                                            tier.mostPopular
                                                ? 'bg-primary text-white hover:bg-secondary'
                                                : 'bg-primary text-white hover:bg-secondary',
                                            'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium'
                                        )}
                                    >
                                        {tier.cta}
                                    </a>
                                </div>
                            ))}
                        </div> */}
                        <div class="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                                <div class="p-8 sm:p-10 lg:flex-auto">
                                    <h3 class="text-2xl font-bold tracking-tight dark:bg-navy-800">Premium feature</h3>
                                    <p class="mt-6 text-base leading-7 text-gray-600 dark:text-gray-100">You don't have to worry about the task creation limit anymore, with this ability you can easily create up to 30 tasks and easily coordinate all your programs. Also, your events will have a brief plan feature that will present your program with details and photos, which will double its appeal and will be very effective in increasing the number of people in the program..</p>
                                    <div class="mt-10 flex items-center gap-x-4">
                                        <h4 class="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
                                        <div class="h-px flex-auto bg-gray-100"></div>
                                    </div>
                                    <ul role="list" class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 dark:text-gray-100 sm:grid-cols-2 sm:gap-6">
                                        <li class="flex gap-x-3">
                                            <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                            </svg>
                                            Increasing the number of group members to 40
                                        </li>
                                        <li class="flex gap-x-3">
                                            <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                            </svg>
                                            Increasing the number of tasks to 30
                                        </li>
                                        <li class="flex gap-x-3">
                                            <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                            </svg>
                                            Add a brief plan
                                        </li>
                                        <li class="flex gap-x-3">
                                            <svg class="h-6 w-5 flex-none text-indigo-600 " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                            </svg>
                                            All features of the general panel
                                        </li>
                                    </ul>
                                </div>
                                <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                                    <div class="rounded-2xl border py-10 text-center ring-1 ring-inset ring-gray-100/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                                        <div class="mx-auto max-w-xs px-8">
                                            <p class="text-base font-semibold text-gray-600 dark:text-gray-100">Pay once, own it forever</p>
                                            <p class="mt-6 flex items-baseline justify-center gap-x-2">
                                                <span class="text-5xl font-bold tracking-tight dark:bg-navy-800">$349</span>
                                                <span class="text-sm font-semibold leading-6 tracking-wide text-gray-600 dark:text-gray-100">USD</span>
                                            </p>
                                            <button
                                                onClick={handleGetAccess}
                                                className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                Get access
                                            </button>                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    </MainSection>
                    </PageWrapper>
        </>
    )
}

export default Subscribtion;