'use client';

import React, { Fragment, useState } from 'react';
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react';
import {
  ArrowDownCircleIcon,
  ArrowPathIcon,
  ArrowUpCircleIcon,
  Bars3Icon,
  EllipsisHorizontalIcon,
  PlusSmallIcon,
} from '@heroicons/react/20/solid';
import { BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Invoices', href: '#' },
  { name: 'Clients', href: '#' },
  { name: 'Expenses', href: '#' },
];
const secondaryNavigation = [
  { name: 'Last 7 days', href: '#', current: true },
  { name: 'Last 30 days', href: '#', current: false },
  { name: 'All-time', href: '#', current: false },
];
const stats = [
  {
    name: 'Revenue',
    value: '$405,091.00',
    change: '+4.75%',
    changeType: 'positive',
  },
  {
    name: 'Overdue invoices',
    value: '$12,787.00',
    change: '+54.02%',
    changeType: 'negative',
  },
  {
    name: 'Outstanding invoices',
    value: '$245,988.00',
    change: '-1.39%',
    changeType: 'positive',
  },
  {
    name: 'Expenses',
    value: '$30,156.00',
    change: '+10.18%',
    changeType: 'negative',
  },
];
const statuses = {
  Paid: 'text-green-700 bg-green-50 ring-green-600/20',
  Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
  Overdue: 'text-red-700 bg-red-50 ring-red-600/10',
};
const days = [
  {
    date: 'Today',
    dateTime: '2023-03-22',
    transactions: [
      {
        id: 1,
        invoiceNumber: '00012',
        href: '#',
        amount: '$7,600.00 USD',
        tax: '$500.00',
        status: 'Paid',
        client: 'Reform',
        description: 'Website redesign',
        icon: ArrowUpCircleIcon,
      },
      {
        id: 2,
        invoiceNumber: '00011',
        href: '#',
        amount: '$10,000.00 USD',
        status: 'Withdraw',
        client: 'Tom Cook',
        description: 'Salary',
        icon: ArrowDownCircleIcon,
      },
      {
        id: 3,
        invoiceNumber: '00009',
        href: '#',
        amount: '$2,000.00 USD',
        tax: '$130.00',
        status: 'Overdue',
        client: 'Tuple',
        description: 'Logo design',
        icon: ArrowPathIcon,
      },
    ],
  },
  {
    date: 'Yesterday',
    dateTime: '2023-03-21',
    transactions: [
      {
        id: 4,
        invoiceNumber: '00010',
        href: '#',
        amount: '$14,000.00 USD',
        tax: '$900.00',
        status: 'Paid',
        client: 'SavvyCal',
        description: 'Website redesign',
        icon: ArrowUpCircleIcon,
      },
    ],
  },
];
const clients = [
  {
    id: 1,
    name: 'Tuple',
    imageUrl: 'https://tailwindui.com/plus/img/logos/48x48/tuple.svg',
    lastInvoice: {
      date: 'December 13, 2022',
      dateTime: '2022-12-13',
      amount: '$2,000.00',
      status: 'Overdue',
    },
  },
  {
    id: 2,
    name: 'SavvyCal',
    imageUrl: 'https://tailwindui.com/plus/img/logos/48x48/savvycal.svg',
    lastInvoice: {
      date: 'January 22, 2023',
      dateTime: '2023-01-22',
      amount: '$14,000.00',
      status: 'Paid',
    },
  },
  {
    id: 3,
    name: 'Reform',
    imageUrl: 'https://tailwindui.com/plus/img/logos/48x48/reform.svg',
    lastInvoice: {
      date: 'January 23, 2023',
      dateTime: '2023-01-23',
      amount: '$7,600.00',
      status: 'Paid',
    },
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function StackedHomeScreen() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="top-0 z-50 absolute inset-x-0 flex border-gray-900/10 border-b h-16">
        <div className="flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
          <div className="flex flex-1 items-center gap-x-6">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden -m-3 p-3"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="w-5 h-5 text-gray-900" />
            </button>
            <img
              alt="Your Company"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="w-auto h-8"
            />
          </div>
          <nav className="md:flex md:gap-x-11 hidden md:font-semibold md:text-sm/6 md:text-gray-700">
            {navigation.map((item, itemIdx) => (
              <a key={itemIdx} href={item.href}>
                {item.name}
              </a>
            ))}
          </nav>
          <div className="flex flex-1 justify-end items-center gap-x-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="w-6 h-6" />
            </button>
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your profile</span>
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="bg-gray-800 rounded-full w-8 h-8"
              />
            </a>
          </div>
        </div>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="z-50 fixed inset-0" />
          <DialogPanel className="left-0 z-50 fixed inset-y-0 bg-white px-4 sm:px-6 pb-6 sm:ring-1 sm:ring-gray-900/10 w-full sm:max-w-sm overflow-y-auto">
            <div className="flex items-center gap-x-6 -ml-0.5 h-16">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="w-6 h-6" />
              </button>
              <div className="-ml-0.5">
                <a href="#" className="block -m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                    className="w-auto h-8"
                  />
                </a>
              </div>
            </div>
            <div className="space-y-2 mt-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg font-semibold text-base/7 text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main>
        <div className="relative pt-16 overflow-hidden isolate">
          {/* Secondary navigation */}
          <header className="pt-6 pb-4 sm:pb-6">
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-6 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <h1 className="font-semibold text-base/7 text-gray-900">
                Cashflow
              </h1>
              <div className="flex gap-x-8 order-last sm:order-none sm:border-gray-200 sm:pl-6 sm:border-l w-full sm:w-auto font-semibold text-sm/6 sm:text-sm/7">
                {secondaryNavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={
                      item.current ? 'text-indigo-600' : 'text-gray-700'
                    }
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <a
                href="#"
                className="flex items-center gap-x-1 bg-indigo-600 hover:bg-indigo-500 shadow-sm ml-auto px-3 py-2 rounded-md font-semibold text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <PlusSmallIcon aria-hidden="true" className="-ml-1.5 w-5 h-5" />
                New invoice
              </a>
            </div>
          </header>

          {/* Stats */}
          <div className="lg:border-t lg:border-t-gray-900/5 border-b border-b-gray-900/10">
            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto lg:px-2 xl:px-0 max-w-7xl">
              {stats.map((stat, statIdx) => (
                <div
                  key={stat.name}
                  className={classNames(
                    statIdx % 2 === 1
                      ? 'sm:border-l'
                      : statIdx === 2
                        ? 'lg:border-l'
                        : '',
                    'flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8',
                  )}
                >
                  <dt className="font-medium text-gray-500 text-sm/6">
                    {stat.name}
                  </dt>
                  <dd
                    className={classNames(
                      stat.changeType === 'negative'
                        ? 'text-rose-600'
                        : 'text-gray-700',
                      'text-xs font-medium',
                    )}
                  >
                    {stat.change}
                  </dd>
                  <dd className="flex-none w-full font-medium text-3xl/10 text-gray-900 tracking-tight">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div
            aria-hidden="true"
            className="top-full left-0 sm:left-1/2 -z-10 absolute opacity-20 sm:opacity-50 blur-3xl mt-96 sm:-mt-10 sm:-ml-96 transform-gpu sm:transform-gpu origin-top-left translate-y-40 sm:translate-y-0 -rotate-90 sm:rotate-0"
          >
            <div
              style={{
                clipPath:
                  'polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)',
              }}
              className="bg-gradient-to-br from-[#FF80B5] to-[#9089FC] w-[72.125rem] aspect-[1154/678]"
            />
          </div>
        </div>

        <div className="space-y-16 xl:space-y-20 py-16">
          {/* Recent activity table */}
          <div>
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <h2 className="mx-auto lg:mx-0 max-w-2xl lg:max-w-none font-semibold text-base text-gray-900">
                Recent activity
              </h2>
            </div>
            <div className="border-gray-100 mt-6 border-t overflow-hidden">
              <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
                  <table className="w-full text-left">
                    <thead className="sr-only">
                      <tr>
                        <th>Amount</th>
                        <th className="hidden sm:table-cell">Client</th>
                        <th>More details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {days.map((day) => (
                        <Fragment key={day.dateTime}>
                          <tr className="text-gray-900 text-sm/6">
                            <th
                              scope="colgroup"
                              colSpan={3}
                              className="relative py-2 font-semibold isolate"
                            >
                              <time dateTime={day.dateTime}>{day.date}</time>
                              <div className="right-full -z-10 absolute inset-y-0 border-gray-200 bg-gray-50 border-b w-screen" />
                              <div className="left-0 -z-10 absolute inset-y-0 border-gray-200 bg-gray-50 border-b w-screen" />
                            </th>
                          </tr>
                          {day.transactions.map((transaction) => (
                            <tr key={transaction.id}>
                              <td className="relative py-5 pr-6">
                                <div className="flex gap-x-6">
                                  <transaction.icon
                                    aria-hidden="true"
                                    className="sm:block flex-none hidden w-5 h-6 text-gray-400"
                                  />
                                  <div className="flex-auto">
                                    <div className="flex items-start gap-x-3">
                                      <div className="font-medium text-gray-900 text-sm/6">
                                        {transaction.amount}
                                      </div>
                                      <div
                                        className={classNames(
                                          statuses[transaction.status],
                                          'rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset',
                                        )}
                                      >
                                        {transaction.status}
                                      </div>
                                    </div>
                                    {transaction.tax ? (
                                      <div className="mt-1 text-gray-500 text-xs/5">
                                        {transaction.tax} tax
                                      </div>
                                    ) : null}
                                  </div>
                                </div>
                                <div className="right-full bottom-0 absolute bg-gray-100 w-screen h-px" />
                                <div className="bottom-0 left-0 absolute bg-gray-100 w-screen h-px" />
                              </td>
                              <td className="hidden py-5 pr-6 sm:table-cell">
                                <div className="text-gray-900 text-sm/6">
                                  {transaction.client}
                                </div>
                                <div className="mt-1 text-gray-500 text-xs/5">
                                  {transaction.description}
                                </div>
                              </td>
                              <td className="text-right py-5">
                                <div className="flex justify-end">
                                  <a
                                    href={transaction.href}
                                    className="font-medium text-indigo-600 text-sm/6 hover:text-indigo-500"
                                  >
                                    View
                                    <span className="sm:inline hidden">
                                      {' '}
                                      transaction
                                    </span>
                                    <span className="sr-only">
                                      , invoice #{transaction.invoiceNumber},{' '}
                                      {transaction.client}
                                    </span>
                                  </a>
                                </div>
                                <div className="mt-1 text-gray-500 text-xs/5">
                                  Invoice{' '}
                                  <span className="text-gray-900">
                                    #{transaction.invoiceNumber}
                                  </span>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Recent client list*/}
          <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-base/7 text-gray-900">
                  Recent clients
                </h2>
                <a
                  href="#"
                  className="font-semibold text-indigo-600 text-sm/6 hover:text-indigo-500"
                >
                  View all<span className="sr-only">, clients</span>
                </a>
              </div>
              <ul
                role="list"
                className="gap-x-6 gap-y-8 xl:gap-x-8 grid grid-cols-1 lg:grid-cols-3 mt-6"
              >
                {clients.map((client) => (
                  <li
                    key={client.id}
                    className="border-gray-200 border rounded-xl overflow-hidden"
                  >
                    <div className="flex items-center gap-x-4 border-gray-900/5 bg-gray-50 p-6 border-b">
                      <img
                        alt={client.name}
                        src={client.imageUrl}
                        className="flex-none bg-white rounded-lg ring-1 ring-gray-900/10 w-12 h-12 object-cover"
                      />
                      <div className="font-medium text-gray-900 text-sm/6">
                        {client.name}
                      </div>
                      <Menu as="div" className="relative ml-auto">
                        <MenuButton className="block -m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Open options</span>
                          <EllipsisHorizontalIcon
                            aria-hidden="true"
                            className="w-5 h-5"
                          />
                        </MenuButton>
                        <MenuItems
                          transition
                          className="right-0 z-10 absolute bg-white data-[closed]:opacity-0 shadow-lg mt-0.5 py-2 rounded-md ring-1 ring-gray-900/5 w-32 data-[closed]:transform origin-top-right transition focus:outline-none data-[closed]:scale-95 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                          <MenuItem>
                            <a
                              href="#"
                              className="block data-[focus]:bg-gray-50 px-3 py-1 text-gray-900 text-sm/6 data-[focus]:outline-none"
                            >
                              View
                              <span className="sr-only">, {client.name}</span>
                            </a>
                          </MenuItem>
                          <MenuItem>
                            <a
                              href="#"
                              className="block data-[focus]:bg-gray-50 px-3 py-1 text-gray-900 text-sm/6 data-[focus]:outline-none"
                            >
                              Edit
                              <span className="sr-only">, {client.name}</span>
                            </a>
                          </MenuItem>
                        </MenuItems>
                      </Menu>
                    </div>
                    <dl className="-my-3 px-6 py-4 divide-y divide-gray-100 text-sm/6">
                      <div className="flex justify-between gap-x-4 py-3">
                        <dt className="text-gray-500">Last invoice</dt>
                        <dd className="text-gray-700">
                          <time dateTime={client.lastInvoice.dateTime}>
                            {client.lastInvoice.date}
                          </time>
                        </dd>
                      </div>
                      <div className="flex justify-between gap-x-4 py-3">
                        <dt className="text-gray-500">Amount</dt>
                        <dd className="flex items-start gap-x-2">
                          <div className="font-medium text-gray-900">
                            {client.lastInvoice.amount}
                          </div>
                          <div
                            className={classNames(
                              statuses[client.lastInvoice.status],
                              'rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset',
                            )}
                          >
                            {client.lastInvoice.status}
                          </div>
                        </dd>
                      </div>
                    </dl>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
