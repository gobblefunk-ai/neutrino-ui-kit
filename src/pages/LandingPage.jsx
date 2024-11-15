/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
'use client';

import React, { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import {
  ArrowPathIcon,
  ChevronRightIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];
const primaryFeatures = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
    icon: ServerIcon,
  },
];
const secondaryFeatures = [
  {
    name: 'Push to deploy',
    description:
      'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues',
    description:
      'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
    href: '#',
    icon: ArrowPathIcon,
  },
];
const featuredTestimonial = {
  body: 'Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.',
  author: {
    name: 'Brenna Goyette',
    handle: 'brennagoyette',
    imageUrl:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
    logoUrl: 'https://tailwindui.com/plus/img/logos/savvycal-logo-gray-900.svg',
  },
};
const testimonials = [
  [
    [
      {
        body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
        author: {
          name: 'Leslie Alexander',
          handle: 'lesliealexander',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      // More testimonials...
    ],
    [
      {
        body: 'Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.',
        author: {
          name: 'Lindsay Walton',
          handle: 'lindsaywalton',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      // More testimonials...
    ],
  ],
  [
    [
      {
        body: 'Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.',
        author: {
          name: 'Tom Cook',
          handle: 'tomcook',
          imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      // More testimonials...
    ],
    [
      {
        body: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.',
        author: {
          name: 'Leonard Krasner',
          handle: 'leonardkrasner',
          imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      // More testimonials...
    ],
  ],
];
const footerNavigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Automation', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Submit ticket', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
  ],
  legal: [
    { name: 'Terms of service', href: '#' },
    { name: 'Privacy policy', href: '#' },
    { name: 'License', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'X',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="top-0 z-50 absolute inset-x-0">
        <nav
          aria-label="Global"
          className="flex justify-between items-center lg:px-8 p-6"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="w-auto h-8"
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
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="z-50 fixed inset-0" />
          <DialogPanel className="right-0 z-50 fixed inset-y-0 bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10 w-full sm:max-w-sm overflow-y-auto">
            <div className="flex justify-between items-center">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  className="w-auto h-8"
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
                      className="block hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg font-semibold text-base/7 text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="block hover:bg-gray-50 -mx-3 px-3 py-2.5 rounded-lg font-semibold text-base/7 text-gray-900"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main>
        {/* Hero section */}
        <div className="relative pt-14 isolate">
          <svg
            aria-hidden="true"
            className="[mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] -z-10 absolute inset-0 w-full h-full stroke-gray-200"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
          <div className="lg:flex lg:items-center lg:gap-x-10 mx-auto px-6 lg:px-8 py-24 sm:py-32 lg:py-40 max-w-7xl">
            <div className="lg:flex-auto mx-auto lg:mx-0 max-w-2xl">
              <div className="flex">
                <div className="relative flex items-center gap-x-4 bg-white px-4 py-1 rounded-full ring-1 ring-gray-900/10 hover:ring-gray-900/20 text-gray-600 text-sm/6">
                  <span className="font-semibold text-indigo-600">
                    We’re hiring
                  </span>
                  <span
                    aria-hidden="true"
                    className="bg-gray-900/10 w-px h-4"
                  />
                  <a href="#" className="flex items-center gap-x-1">
                    <span aria-hidden="true" className="absolute inset-0" />
                    See open positions
                    <ChevronRightIcon
                      aria-hidden="true"
                      className="-mr-2 w-5 h-5 text-gray-400"
                    />
                  </a>
                </div>
              </div>
              <h1 className="mt-10 font-semibold text-5xl text-gray-900 text-pretty sm:text-7xl tracking-tight">
                A better way to ship your projects
              </h1>
              <p className="mt-8 font-medium text-gray-500 text-lg text-pretty sm:text-xl/8">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt
                sunt.
              </p>
              <div className="flex items-center gap-x-6 mt-10">
                <a
                  href="#"
                  className="bg-indigo-600 hover:bg-indigo-500 shadow-sm px-3.5 py-2.5 rounded-md font-semibold text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a href="#" className="font-semibold text-gray-900 text-sm/6">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
              <svg
                role="img"
                viewBox="0 0 366 729"
                className="drop-shadow-xl mx-auto w-[22.875rem] max-w-full"
              >
                <title>App screenshot</title>
                <defs>
                  <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                    <rect rx={36} width={316} height={684} />
                  </clipPath>
                </defs>
                <path
                  d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                  fill="#4B5563"
                />
                <path
                  d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                  fill="#343E4E"
                />
                <foreignObject
                  width={316}
                  height={684}
                  clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                  transform="translate(24 24)"
                >
                  <img
                    alt=""
                    src="https://tailwindui.com/plus/img/component-images/mobile-app-screenshot.png"
                  />
                </foreignObject>
              </svg>
            </div>
          </div>
        </div>

        {/* Logo cloud */}
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="items-center gap-x-8 gap-y-12 sm:gap-x-10 sm:gap-y-14 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-5 mx-auto lg:mx-0 max-w-lg sm:max-w-xl lg:max-w-none">
            <img
              alt="Transistor"
              src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-400.svg"
              width={158}
              height={48}
              className="col-span-2 lg:col-span-1 w-full max-h-12 object-contain"
            />
            <img
              alt="Reform"
              src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-400.svg"
              width={158}
              height={48}
              className="col-span-2 lg:col-span-1 w-full max-h-12 object-contain"
            />
            <img
              alt="Tuple"
              src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-400.svg"
              width={158}
              height={48}
              className="col-span-2 lg:col-span-1 w-full max-h-12 object-contain"
            />
            <img
              alt="SavvyCal"
              src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-400.svg"
              width={158}
              height={48}
              className="col-span-2 lg:col-span-1 sm:col-start-2 w-full max-h-12 object-contain"
            />
            <img
              alt="Statamic"
              src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-400.svg"
              width={158}
              height={48}
              className="col-span-2 lg:col-span-1 col-start-2 sm:col-start-auto w-full max-h-12 object-contain"
            />
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto mt-32 sm:mt-56 sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative bg-gray-900 px-6 sm:px-10 xl:px-24 py-20 sm:py-24 lg:py-24 sm:rounded-3xl overflow-hidden isolate">
            <div className="lg:items-center gap-x-8 gap-y-16 sm:gap-y-20 lg:gap-y-0 grid grid-cols-1 lg:grid-cols-2 mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
              <div className="lg:row-start-2 lg:max-w-md">
                <h2 className="font-semibold text-3xl text-balance text-white sm:text-4xl tracking-tight">
                  Boost your productivity. Start using our app today.
                </h2>
                <p className="mt-6 text-gray-300 text-lg/8">
                  Ac euismod vel sit maecenas id pellentesque eu sed
                  consectetur. Malesuada adipiscing sagittis vel nulla. Ac
                  euismod vel sit maecenas.
                </p>
              </div>
              <img
                alt="Product screenshot"
                src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
                width={2432}
                height={1442}
                className="relative -z-20 lg:row-span-4 shadow-xl rounded-xl ring-1 ring-white/10 lg:w-[64rem] min-w-full max-w-xl lg:max-w-none"
              />
              <div className="lg:border-white/10 lg:row-start-3 lg:mt-10 lg:pt-10 lg:border-t max-w-xl lg:max-w-md">
                <dl className="space-y-8 max-w-xl lg:max-w-none text-base/7 text-gray-300">
                  {primaryFeatures.map((feature) => (
                    <div key={feature.name} className="relative">
                      <dt className="inline-block ml-9 font-semibold text-white">
                        <feature.icon
                          aria-hidden="true"
                          className="top-1 left-1 absolute w-5 h-5 text-indigo-500"
                        />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="top-1/2 lg:top-auto lg:bottom-[-12rem] left-12 -z-10 absolute blur-3xl transform-gpu lg:transform-gpu -translate-y-1/2 lg:translate-y-0 pointer-events-none"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-25 w-[72.1875rem] aspect-[1155/678]"
              />
            </div>
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto mt-32 sm:mt-56 px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="font-semibold text-base/7 text-indigo-600">
              Deploy faster
            </h2>
            <p className="mt-2 font-semibold text-4xl text-gray-900 text-pretty sm:text-5xl lg:text-balance tracking-tight">
              Everything you need to deploy your app
            </p>
            <p className="mt-6 text-gray-600 text-lg/8">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p>
          </div>
          <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 max-w-2xl lg:max-w-none">
            <dl className="gap-x-8 gap-y-16 grid grid-cols-1 lg:grid-cols-3 max-w-xl lg:max-w-none">
              {secondaryFeatures.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 font-semibold text-base/7 text-gray-900">
                    <feature.icon
                      aria-hidden="true"
                      className="flex-none w-5 h-5 text-indigo-600"
                    />
                    {feature.name}
                  </dt>
                  <dd className="flex flex-col flex-auto mt-4 text-base/7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <a
                        href={feature.href}
                        className="font-semibold text-indigo-600 text-sm/6"
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Newsletter section */}
        <div className="mx-auto mt-32 sm:mt-56 sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative bg-gray-900 shadow-2xl px-6 sm:px-24 py-24 xl:py-32 sm:rounded-3xl overflow-hidden isolate">
            <h2 className="mx-auto max-w-3xl font-semibold text-4xl text-center text-white sm:text-5xl tracking-tight">
              Get notified when we’re launching
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-center text-gray-300 text-lg">
              Reprehenderit ad esse et non officia in nulla. Id proident tempor
              incididunt nostrud nulla et culpa.
            </p>
            <form className="flex gap-x-4 mx-auto mt-10 max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="flex-auto border-0 bg-white/5 shadow-sm px-3.5 py-2 rounded-md ring-1 ring-white/10 focus:ring-2 focus:ring-white ring-inset focus:ring-inset min-w-0 text-white sm:text-sm/6"
              />
              <button
                type="submit"
                className="flex-none bg-white hover:bg-gray-100 shadow-sm px-3.5 py-2.5 rounded-md font-semibold text-gray-900 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Notify me
              </button>
            </form>
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="top-1/2 left-1/2 -z-10 absolute w-[64rem] h-[64rem] -translate-x-1/2"
            >
              <circle
                r={512}
                cx={512}
                cy={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient
                  r={1}
                  cx={0}
                  cy={0}
                  id="759c1415-0410-454c-8f7c-9a820de03641"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)"
                >
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Testimonials section */}
        <div className="relative mt-32 sm:mt-56 sm:pt-32 isolate">
          <svg
            aria-hidden="true"
            className="sm:block [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] -z-10 absolute inset-0 hidden w-full h-full stroke-gray-200"
          >
            <defs>
              <pattern
                x="50%"
                y={0}
                id="55d3d46d-692e-45f2-becd-d8bdc9344f45"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={0} className="overflow-visible fill-gray-50">
              <path
                d="M-200.5 0h201v201h-201Z M599.5 0h201v201h-201Z M399.5 400h201v201h-201Z M-400.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#55d3d46d-692e-45f2-becd-d8bdc9344f45)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
          <div className="relative">
            <div
              aria-hidden="true"
              className="top-1/2 -z-10 absolute inset-x-0 opacity-30 blur-3xl transform-gpu -translate-y-1/2 overflow-hidden"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] ml-[max(50%,38rem)] w-[82.0625rem] aspect-[1313/771]"
              />
            </div>
            <div
              aria-hidden="true"
              className="top-0 -z-10 absolute inset-x-0 flex xl:justify-end opacity-25 blur-3xl pt-8 transform-gpu overflow-hidden"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="flex-none bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:mr-[calc(50%-12rem)] ml-[-22rem] xl:ml-0 w-[82.0625rem] origin-top-right aspect-[1313/771] rotate-[30deg]"
              />
            </div>
            <div className="mx-auto px-6 lg:px-8 max-w-7xl">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="font-semibold text-base/7 text-indigo-600">
                  Testimonials
                </h2>
                <p className="mt-2 font-semibold text-4xl text-gray-900 text-pretty sm:text-balance sm:text-5xl tracking-tight">
                  We have worked with thousands of amazing people
                </p>
              </div>
              <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 grid-rows-1 xl:grid-flow-col mx-auto xl:mx-0 mt-16 sm:mt-20 max-w-2xl xl:max-w-none text-gray-900 text-sm/6">
                <figure className="sm:block hidden col-span-2 xl:col-start-2 xl:row-end-1 sm:bg-white sm:shadow-lg sm:rounded-2xl sm:ring-1 sm:ring-gray-900/5">
                  <blockquote className="p-12 font-semibold text-gray-900 text-xl/8 tracking-tight">
                    <p>{`“${featuredTestimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="flex items-center gap-x-4 border-gray-900/10 px-6 py-4 border-t">
                    <img
                      alt=""
                      src={featuredTestimonial.author.imageUrl}
                      className="flex-none bg-gray-50 rounded-full w-10 h-10"
                    />
                    <div className="flex-auto">
                      <div className="font-semibold">
                        {featuredTestimonial.author.name}
                      </div>
                      <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
                    </div>
                    <img
                      alt=""
                      src={featuredTestimonial.author.logoUrl}
                      className="flex-none w-auto h-10"
                    />
                  </figcaption>
                </figure>
                {testimonials.map((columnGroup, columnGroupIdx) => (
                  <div
                    key={columnGroupIdx}
                    className="space-y-8 xl:contents xl:space-y-0"
                  >
                    {columnGroup.map((column, columnIdx) => (
                      <div
                        key={columnIdx}
                        className={classNames(
                          (columnGroupIdx === 0 && columnIdx === 0) ||
                            (columnGroupIdx === testimonials.length - 1 &&
                              columnIdx === columnGroup.length - 1)
                            ? 'xl:row-span-2'
                            : 'xl:row-start-1',
                          'space-y-8',
                        )}
                      >
                        {column.map((testimonial) => (
                          <figure
                            key={testimonial.author.handle}
                            className="bg-white shadow-lg p-6 rounded-2xl ring-1 ring-gray-900/5"
                          >
                            <blockquote className="text-gray-900">
                              <p>{`“${testimonial.body}”`}</p>
                            </blockquote>
                            <figcaption className="flex items-center gap-x-4 mt-6">
                              <img
                                alt=""
                                src={testimonial.author.imageUrl}
                                className="bg-gray-50 rounded-full w-10 h-10"
                              />
                              <div>
                                <div className="font-semibold">
                                  {testimonial.author.name}
                                </div>
                                <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                              </div>
                            </figcaption>
                          </figure>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 mt-32 sm:mt-56">
        <div className="mx-auto px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32 pb-8 max-w-7xl">
          <div className="xl:gap-8 xl:grid xl:grid-cols-3">
            <img
              alt="Company name"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
              className="h-9"
            />
            <div className="gap-8 grid grid-cols-2 xl:col-span-2 mt-16 xl:mt-0">
              <div className="md:gap-8 md:grid md:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-sm/6 text-white">
                    Solutions
                  </h3>
                  <ul role="list" className="space-y-4 mt-6">
                    {footerNavigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-gray-400 text-sm/6 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="font-semibold text-sm/6 text-white">
                    Support
                  </h3>
                  <ul role="list" className="space-y-4 mt-6">
                    {footerNavigation.support.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-gray-400 text-sm/6 hover:text-white"
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
                  <h3 className="font-semibold text-sm/6 text-white">
                    Company
                  </h3>
                  <ul role="list" className="space-y-4 mt-6">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-gray-400 text-sm/6 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="font-semibold text-sm/6 text-white">Legal</h3>
                  <ul role="list" className="space-y-4 mt-6">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-gray-400 text-sm/6 hover:text-white"
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
          <div className="lg:flex lg:justify-between lg:items-center border-white/10 mt-16 sm:mt-20 lg:mt-24 pt-8 border-t">
            <div>
              <h3 className="font-semibold text-sm/6 text-white">
                Subscribe to our newsletter
              </h3>
              <p className="mt-2 text-gray-300 text-sm/6">
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
            </div>
            <form className="sm:flex mt-6 lg:mt-0 sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="border-0 bg-white/5 shadow-sm px-3 py-1.5 rounded-md ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-500 ring-inset focus:ring-inset w-full sm:w-56 min-w-0 text-base text-white placeholder:text-gray-500 sm:text-sm/6 appearance-none"
              />
              <div className="mt-4 sm:mt-0 sm:ml-4 sm:shrink-0">
                <button
                  type="submit"
                  className="flex justify-center items-center bg-indigo-500 hover:bg-indigo-400 shadow-sm px-3 py-2 rounded-md w-full font-semibold text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="md:flex md:justify-between md:items-center border-white/10 mt-8 pt-8 border-t">
            <div className="flex gap-x-6 md:order-2">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="w-6 h-6" />
                </a>
              ))}
            </div>
            <p className="md:order-1 mt-8 md:mt-0 text-gray-400 text-sm/6">
              &copy; 2024 Your Company, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
