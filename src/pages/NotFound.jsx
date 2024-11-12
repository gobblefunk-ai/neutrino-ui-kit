'use client';

import React, { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];
const footer = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
};

export default function NotFound() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <div className="flex flex-col min-h-full">
        <header className="mx-auto px-6 lg:px-8 pt-6 w-full max-w-7xl">
          <nav
            aria-label="Global"
            className="flex justify-between items-center"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8"
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="inline-flex justify-center items-center -m-2.5 p-2.5 rounded-md text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="w-6 h-6" />
              </button>
            </div>
            <div className="lg:flex lg:gap-x-12 hidden">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-semibold text-gray-900 text-sm/6"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="lg:flex lg:flex-1 lg:justify-end hidden">
              <a href="#" className="font-semibold text-gray-900 text-sm/6">
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <DialogPanel className="z-10 fixed inset-0 lg:hidden bg-white px-6 py-6 overflow-y-auto">
              <div className="flex justify-between items-center">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8"
                  />
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 p-2.5 rounded-md text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="w-6 h-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block hover:bg-gray-400/10 -mx-3 px-3 py-2 rounded-lg font-semibold text-base/7 text-gray-900"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="block hover:bg-gray-400/10 -mx-3 px-3 py-2.5 rounded-lg font-semibold text-base text-gray-900"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>

        <main className="flex flex-col flex-auto justify-center mx-auto px-6 lg:px-8 py-24 sm:py-64 w-full max-w-7xl">
          <p className="font-semibold text-base/8 text-indigo-600">404</p>
          <h1 className="mt-4 font-semibold text-5xl text-gray-900 text-pretty sm:text-6xl tracking-tight">
            Page not found
          </h1>
          <p className="mt-6 font-medium text-gray-500 text-lg text-pretty sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10">
            <a href="#" className="font-semibold text-indigo-600 text-sm/7">
              <span aria-hidden="true">&larr;</span> Back to home
            </a>
          </div>
        </main>

        <footer
          aria-labelledby="footer-heading"
          className="border-gray-200 border-t"
        >
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="mx-auto px-6 lg:px-8 py-16 sm:py-24 lg:py-32 max-w-7xl">
            <div className="xl:gap-8 xl:grid xl:grid-cols-3">
              <img
                alt="Company name"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-7"
              />
              <div className="gap-8 grid grid-cols-2 xl:col-span-2 mt-16 xl:mt-0">
                <div className="md:gap-8 md:grid md:grid-cols-2">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm/6">
                      Solutions
                    </h3>
                    <ul role="list" className="space-y-4 mt-6">
                      {footer.solutions.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-gray-600 text-sm/6 hover:text-gray-900"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="font-semibold text-gray-900 text-sm/6">
                      Support
                    </h3>
                    <ul role="list" className="space-y-4 mt-6">
                      {footer.support.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-gray-600 text-sm/6 hover:text-gray-900"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="md:gap-8 md:grid md:grid-cols-2">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm/6">
                      Company
                    </h3>
                    <ul role="list" className="space-y-4 mt-6">
                      {footer.company.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-gray-600 text-sm/6 hover:text-gray-900"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-10 md:mt-0">
                    <h3 className="font-semibold text-gray-900 text-sm/6">
                      Legal
                    </h3>
                    <ul role="list" className="space-y-4 mt-6">
                      {footer.legal.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-gray-600 text-sm/6 hover:text-gray-900"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
