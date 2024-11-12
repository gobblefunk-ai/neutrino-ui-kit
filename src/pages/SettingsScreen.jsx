'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from '@headlessui/react';
import {
  ChartBarSquareIcon,
  Cog6ToothIcon,
  FolderIcon,
  GlobeAltIcon,
  ServerIcon,
  SignalIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';

const navigation = [
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Deployments', href: '#', icon: ServerIcon, current: false },
  { name: 'Activity', href: '#', icon: SignalIcon, current: false },
  { name: 'Domains', href: '#', icon: GlobeAltIcon, current: false },
  { name: 'Usage', href: '#', icon: ChartBarSquareIcon, current: false },
  { name: 'Settings', href: '#', icon: Cog6ToothIcon, current: true },
];
const teams = [
  { id: 1, name: 'Planetaria', href: '#', initial: 'P', current: false },
  { id: 2, name: 'Protocol', href: '#', initial: 'P', current: false },
  { id: 3, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
];
const secondaryNavigation = [
  { name: 'Account', href: '#', current: true },
  { name: 'Notifications', href: '#', current: false },
  { name: 'Billing', href: '#', current: false },
  { name: 'Teams', href: '#', current: false },
  { name: 'Integrations', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function SettingsScreen() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="bg-gray-900 h-full">
        <body class="h-full">
        ```
      */}
      <div class="bg-gray-900 h-full">
        <Dialog
          open={sidebarOpen}
          onClose={setSidebarOpen}
          className="relative z-50 xl:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 data-[closed]:opacity-0 transition-opacity duration-300 ease-linear"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative flex flex-1 mr-16 w-full max-w-xs transform transition data-[closed]:-translate-x-full duration-300 ease-in-out"
            >
              <TransitionChild>
                <div className="top-0 left-full absolute flex justify-center data-[closed]:opacity-0 pt-5 w-16 duration-300 ease-in-out">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className="-m-2.5 p-2.5"
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      aria-hidden="true"
                      className="w-6 h-6 text-white"
                    />
                  </button>
                </div>
              </TransitionChild>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex flex-col gap-y-5 bg-gray-900 px-6 ring-1 ring-white/10 overflow-y-auto grow">
                <div className="flex items-center h-16 shrink-0">
                  <img
                    alt="Your Company"
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                    className="w-auto h-8"
                  />
                </div>
                <nav className="flex flex-col flex-1">
                  <ul role="list" className="flex flex-col flex-1 gap-y-7">
                    <li>
                      <ul role="list" className="space-y-1 -mx-2">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-gray-800 text-white'
                                  : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                              )}
                            >
                              <item.icon
                                aria-hidden="true"
                                className="w-6 h-6 shrink-0"
                              />
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <div className="font-semibold text-gray-400 text-xs/6">
                        Your teams
                      </div>
                      <ul role="list" className="space-y-1 -mx-2 mt-2">
                        {teams.map((team) => (
                          <li key={team.name}>
                            <a
                              href={team.href}
                              className={classNames(
                                team.current
                                  ? 'bg-gray-800 text-white'
                                  : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                              )}
                            >
                              <span className="group-hover:text-white flex justify-center items-center border-gray-700 bg-gray-800 border rounded-lg w-6 h-6 font-medium text-[0.625rem] text-gray-400 shrink-0">
                                {team.initial}
                              </span>
                              <span className="truncate">{team.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="-mx-6 mt-auto">
                      <a
                        href="#"
                        className="flex items-center gap-x-4 hover:bg-gray-800 px-6 py-3 font-semibold text-sm/6 text-white"
                      >
                        <img
                          alt=""
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          className="bg-gray-800 rounded-full w-8 h-8"
                        />
                        <span className="sr-only">Your profile</span>
                        <span aria-hidden="true">Tom Cook</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="xl:z-50 xl:fixed xl:inset-y-0 xl:flex xl:flex-col hidden xl:w-72">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col gap-y-5 bg-black/10 px-6 ring-1 ring-white/5 overflow-y-auto grow">
            <div className="flex items-center h-16 shrink-0">
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                className="w-auto h-8"
              />
            </div>
            <nav className="flex flex-col flex-1">
              <ul role="list" className="flex flex-col flex-1 gap-y-7">
                <li>
                  <ul role="list" className="space-y-1 -mx-2">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-800 text-white'
                              : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                          )}
                        >
                          <item.icon
                            aria-hidden="true"
                            className="w-6 h-6 shrink-0"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="font-semibold text-gray-400 text-xs/6">
                    Your teams
                  </div>
                  <ul role="list" className="space-y-1 -mx-2 mt-2">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={classNames(
                            team.current
                              ? 'bg-gray-800 text-white'
                              : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                          )}
                        >
                          <span className="group-hover:text-white flex justify-center items-center border-gray-700 bg-gray-800 border rounded-lg w-6 h-6 font-medium text-[0.625rem] text-gray-400 shrink-0">
                            {team.initial}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="-mx-6 mt-auto">
                  <a
                    href="#"
                    className="flex items-center gap-x-4 hover:bg-gray-800 px-6 py-3 font-semibold text-sm/6 text-white"
                  >
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="bg-gray-800 rounded-full w-8 h-8"
                    />
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">Tom Cook</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="xl:pl-72">
          {/* Sticky search header */}
          <div className="top-0 z-40 sticky flex items-center gap-x-6 border-white/5 bg-gray-900 shadow-sm px-4 sm:px-6 lg:px-8 border-b h-16 shrink-0">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="xl:hidden -m-2.5 p-2.5 text-white"
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon aria-hidden="true" className="w-5 h-5" />
            </button>

            <div className="flex flex-1 gap-x-4 lg:gap-x-6 self-stretch">
              <form action="#" method="GET" className="flex flex-1">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <MagnifyingGlassIcon
                    aria-hidden="true"
                    className="left-0 absolute inset-y-0 w-5 h-full text-gray-500 pointer-events-none"
                  />
                  <input
                    id="search-field"
                    name="search"
                    type="search"
                    placeholder="Search..."
                    className="block border-0 bg-transparent py-0 pr-0 pl-8 focus:ring-0 w-full h-full text-white sm:text-sm"
                  />
                </div>
              </form>
            </div>
          </div>

          <main>
            <h1 className="sr-only">Account Settings</h1>

            <header className="border-white/5 border-b">
              {/* Secondary navigation */}
              <nav className="flex py-4 overflow-x-auto">
                <ul
                  role="list"
                  className="flex flex-none gap-x-6 px-4 sm:px-6 lg:px-8 min-w-full font-semibold text-gray-400 text-sm/6"
                >
                  {secondaryNavigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={item.current ? 'text-indigo-400' : ''}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </header>

            {/* Settings forms */}
            <div className="divide-y divide-white/5">
              <div className="gap-x-8 gap-y-10 grid grid-cols-1 md:grid-cols-3 px-4 sm:px-6 lg:px-8 py-16 max-w-7xl">
                <div>
                  <h2 className="font-semibold text-base/7 text-white">
                    Personal Information
                  </h2>
                  <p className="mt-1 text-gray-400 text-sm/6">
                    Use a permanent address where you can receive mail.
                  </p>
                </div>

                <form className="md:col-span-2">
                  <div className="gap-x-6 gap-y-8 grid grid-cols-1 sm:grid-cols-6 sm:max-w-xl">
                    <div className="flex items-center gap-x-8 col-span-full">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="flex-none bg-gray-800 rounded-lg w-24 h-24 object-cover"
                      />
                      <div>
                        <button
                          type="button"
                          className="bg-white/10 hover:bg-white/20 shadow-sm px-3 py-2 rounded-md font-semibold text-sm text-white"
                        >
                          Change avatar
                        </button>
                        <p className="mt-2 text-gray-400 text-xs/5">
                          JPG, GIF or PNG. 1MB max.
                        </p>
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block font-medium text-sm/6 text-white"
                      >
                        First name
                      </label>
                      <div className="mt-2">
                        <input
                          id="first-name"
                          name="first-name"
                          type="text"
                          autoComplete="given-name"
                          className="block border-0 bg-white/5 shadow-sm py-1.5 rounded-md ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-500 ring-inset focus:ring-inset w-full text-white sm:text-sm/6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block font-medium text-sm/6 text-white"
                      >
                        Last name
                      </label>
                      <div className="mt-2">
                        <input
                          id="last-name"
                          name="last-name"
                          type="text"
                          autoComplete="family-name"
                          className="block border-0 bg-white/5 shadow-sm py-1.5 rounded-md ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-500 ring-inset focus:ring-inset w-full text-white sm:text-sm/6"
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="email"
                        className="block font-medium text-sm/6 text-white"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="block border-0 bg-white/5 shadow-sm py-1.5 rounded-md ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-500 ring-inset focus:ring-inset w-full text-white sm:text-sm/6"
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="username"
                        className="block font-medium text-sm/6 text-white"
                      >
                        Username
                      </label>
                      <div className="mt-2">
                        <div className="flex bg-white/5 rounded-md ring-1 ring-white/10 focus-within:ring-2 focus-within:ring-indigo-500 ring-inset focus-within:ring-inset">
                          <span className="flex items-center pl-3 text-gray-400 sm:text-sm select-none">
                            example.com/
                          </span>
                          <input
                            id="username"
                            name="username"
                            type="text"
                            placeholder="janesmith"
                            autoComplete="username"
                            className="flex-1 border-0 bg-transparent py-1.5 pl-1 focus:ring-0 text-white sm:text-sm/6"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="timezone"
                        className="block font-medium text-sm/6 text-white"
                      >
                        Timezone
                      </label>
                      <div className="mt-2">
                        <select
                          id="timezone"
                          name="timezone"
                          className="block border-0 bg-white/5 shadow-sm py-1.5 rounded-md ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-500 ring-inset focus:ring-inset w-full text-white [&_*]:text-black sm:text-sm/6"
                        >
                          <option>Pacific Standard Time</option>
                          <option>Eastern Standard Time</option>
                          <option>Greenwich Mean Time</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="flex mt-8">
                    <button
                      type="submit"
                      className="bg-indigo-500 hover:bg-indigo-400 shadow-sm px-3 py-2 rounded-md font-semibold text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>

              <div className="gap-x-8 gap-y-10 grid grid-cols-1 md:grid-cols-3 px-4 sm:px-6 lg:px-8 py-16 max-w-7xl">
                <div>
                  <h2 className="font-semibold text-base/7 text-white">
                    Change password
                  </h2>
                  <p className="mt-1 text-gray-400 text-sm/6">
                    Update your password associated with your account.
                  </p>
                </div>

                <form className="md:col-span-2">
                  <div className="gap-x-6 gap-y-8 grid grid-cols-1 sm:grid-cols-6 sm:max-w-xl">
                    <div className="col-span-full">
                      <label
                        htmlFor="current-password"
                        className="block font-medium text-sm/6 text-white"
                      >
                        Current password
                      </label>
                      <div className="mt-2">
                        <input
                          id="current-password"
                          name="current_password"
                          type="password"
                          autoComplete="current-password"
                          className="block border-0 bg-white/5 shadow-sm py-1.5 rounded-md ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-500 ring-inset focus:ring-inset w-full text-white sm:text-sm/6"
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="new-password"
                        className="block font-medium text-sm/6 text-white"
                      >
                        New password
                      </label>
                      <div className="mt-2">
                        <input
                          id="new-password"
                          name="new_password"
                          type="password"
                          autoComplete="new-password"
                          className="block border-0 bg-white/5 shadow-sm py-1.5 rounded-md ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-500 ring-inset focus:ring-inset w-full text-white sm:text-sm/6"
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="confirm-password"
                        className="block font-medium text-sm/6 text-white"
                      >
                        Confirm password
                      </label>
                      <div className="mt-2">
                        <input
                          id="confirm-password"
                          name="confirm_password"
                          type="password"
                          autoComplete="new-password"
                          className="block border-0 bg-white/5 shadow-sm py-1.5 rounded-md ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-500 ring-inset focus:ring-inset w-full text-white sm:text-sm/6"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex mt-8">
                    <button
                      type="submit"
                      className="bg-indigo-500 hover:bg-indigo-400 shadow-sm px-3 py-2 rounded-md font-semibold text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>

              <div className="gap-x-8 gap-y-10 grid grid-cols-1 md:grid-cols-3 px-4 sm:px-6 lg:px-8 py-16 max-w-7xl">
                <div>
                  <h2 className="font-semibold text-base/7 text-white">
                    Log out other sessions
                  </h2>
                  <p className="mt-1 text-gray-400 text-sm/6">
                    Please enter your password to confirm you would like to log
                    out of your other sessions across all of your devices.
                  </p>
                </div>

                <form className="md:col-span-2">
                  <div className="gap-x-6 gap-y-8 grid grid-cols-1 sm:grid-cols-6 sm:max-w-xl">
                    <div className="col-span-full">
                      <label
                        htmlFor="logout-password"
                        className="block font-medium text-sm/6 text-white"
                      >
                        Your password
                      </label>
                      <div className="mt-2">
                        <input
                          id="logout-password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          className="block border-0 bg-white/5 shadow-sm py-1.5 rounded-md ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-500 ring-inset focus:ring-inset w-full text-white sm:text-sm/6"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex mt-8">
                    <button
                      type="submit"
                      className="bg-indigo-500 hover:bg-indigo-400 shadow-sm px-3 py-2 rounded-md font-semibold text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Log out other sessions
                    </button>
                  </div>
                </form>
              </div>

              <div className="gap-x-8 gap-y-10 grid grid-cols-1 md:grid-cols-3 px-4 sm:px-6 lg:px-8 py-16 max-w-7xl">
                <div>
                  <h2 className="font-semibold text-base/7 text-white">
                    Delete account
                  </h2>
                  <p className="mt-1 text-gray-400 text-sm/6">
                    No longer want to use our service? You can delete your
                    account here. This action is not reversible. All information
                    related to this account will be deleted permanently.
                  </p>
                </div>

                <form className="flex items-start md:col-span-2">
                  <button
                    type="submit"
                    className="bg-red-500 hover:bg-red-400 shadow-sm px-3 py-2 rounded-md font-semibold text-sm text-white"
                  >
                    Yes, delete my account
                  </button>
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
