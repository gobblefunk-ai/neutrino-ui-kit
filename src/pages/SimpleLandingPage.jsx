'use client';

import React, { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import {
  ArrowPathIcon,
  Bars3Icon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { CheckIcon } from '@heroicons/react/20/solid';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];
const features = [
  {
    name: 'Push to deploy',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
  },
];
const tiers = [
  {
    name: 'Freelancer',
    id: 'tier-freelancer',
    href: '#',
    priceMonthly: '$19',
    description: 'The essentials to provide your best work for clients.',
    features: [
      '5 products',
      'Up to 1,000 subscribers',
      'Basic analytics',
      '48-hour support response time',
    ],
    mostPopular: false,
  },
  {
    name: 'Startup',
    id: 'tier-startup',
    href: '#',
    priceMonthly: '$49',
    description: 'A plan that scales with your rapidly growing business.',
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
      'Marketing automations',
    ],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '$99',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
    ],
    mostPopular: false,
  },
];
const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];
const footerNavigation = {
  solutions: [
    { name: 'Hosting', href: '#' },
    { name: 'Data services', href: '#' },
    { name: 'Uptime monitoring', href: '#' },
    { name: 'Enterprise services', href: '#' },
    { name: 'Analytics', href: '#' },
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
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function SimpleLandingPage() {
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

      <main className="isolate">
        {/* Hero section */}
        <div className="relative pt-14">
          <div
            aria-hidden="true"
            className="-top-40 sm:-top-80 -z-10 absolute inset-x-0 blur-3xl transform-gpu overflow-hidden"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] sm:left-[calc(50%-30rem)] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 w-[36.125rem] sm:w-[72.1875rem] -translate-x-1/2 aspect-[1155/678] rotate-[30deg]"
            />
          </div>
          <div className="py-24 sm:py-32 lg:pb-40">
            <div className="mx-auto px-6 lg:px-8 max-w-7xl">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="font-semibold text-5xl text-balance text-gray-900 sm:text-7xl tracking-tight">
                  Deploy to the cloud with confidence
                </h1>
                <p className="mt-8 font-medium text-gray-500 text-lg text-pretty sm:text-xl/8">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat.
                </p>
                <div className="flex justify-center items-center gap-x-6 mt-10">
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
              <div className="mt-16 sm:mt-24 flow-root">
                <div className="bg-gray-900/5 -m-2 lg:-m-4 p-2 lg:p-4 rounded-xl lg:rounded-2xl ring-1 ring-gray-900/10 ring-inset">
                  <img
                    alt="App screenshot"
                    src="https://tailwindui.com/plus/img/component-images/project-app-screenshot.png"
                    width={2432}
                    height={1442}
                    className="shadow-2xl rounded-md ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="top-[calc(100%-13rem)] sm:top-[calc(100%-30rem)] -z-10 absolute inset-x-0 blur-3xl transform-gpu overflow-hidden"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%+3rem)] sm:left-[calc(50%+36rem)] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 w-[36.125rem] sm:w-[72.1875rem] -translate-x-1/2 aspect-[1155/678]"
            />
          </div>
        </div>

        {/* Logo cloud */}
        <div className="mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="items-center gap-x-8 gap-y-12 sm:gap-x-10 sm:gap-y-14 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-5 mx-auto lg:mx-0 max-w-lg sm:max-w-xl lg:max-w-none">
            <img
              alt="Transistor"
              src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 lg:col-span-1 w-full max-h-12 object-contain"
            />
            <img
              alt="Reform"
              src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 lg:col-span-1 w-full max-h-12 object-contain"
            />
            <img
              alt="Tuple"
              src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 lg:col-span-1 w-full max-h-12 object-contain"
            />
            <img
              alt="SavvyCal"
              src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 lg:col-span-1 sm:col-start-2 w-full max-h-12 object-contain"
            />
            <img
              alt="Statamic"
              src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 lg:col-span-1 col-start-2 sm:col-start-auto w-full max-h-12 object-contain"
            />
          </div>
          <div className="flex justify-center mt-16">
            <p className="relative px-4 py-1.5 rounded-full ring-1 ring-gray-900/10 hover:ring-gray-900/20 ring-inset text-gray-600 text-sm/6">
              <span className="md:inline hidden">
                Transistor saves up to $40,000 per year, per employee by working
                with us.
              </span>
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" /> Read
                our case study <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
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
            <p className="mt-6 text-gray-600 text-lg/8 text-pretty">
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </p>
          </div>
          <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 max-w-2xl lg:max-w-4xl">
            <dl className="gap-x-8 gap-y-10 lg:gap-y-16 grid grid-cols-1 lg:grid-cols-2 max-w-xl lg:max-w-none">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="font-semibold text-base/7 text-gray-900">
                    <div className="top-0 left-0 absolute flex justify-center items-center bg-indigo-600 rounded-lg w-10 h-10">
                      <feature.icon
                        aria-hidden="true"
                        className="w-6 h-6 text-white"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Testimonial section */}
        <div className="mx-auto mt-32 sm:mt-56 sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative bg-gray-900 shadow-xl px-6 sm:px-10 md:px-12 lg:px-20 py-20 sm:py-24 sm:rounded-3xl overflow-hidden">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80"
              className="brightness-150 absolute inset-0 w-full h-full object-cover saturate-0"
            />
            <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />
            <div
              aria-hidden="true"
              className="-top-56 -left-80 absolute blur-3xl transform-gpu"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-[0.45] w-[68.5625rem] aspect-[1097/845]"
              />
            </div>
            <div
              aria-hidden="true"
              className="md:block md:bottom-16 md:left-[50rem] md:absolute hidden md:blur-3xl md:transform-gpu"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25 w-[68.5625rem] aspect-[1097/845]"
              />
            </div>
            <div className="relative mx-auto lg:mx-0 max-w-2xl">
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/workcation-logo-white.svg"
                className="w-auto h-12"
              />
              <figure>
                <blockquote className="mt-6 font-semibold text-lg text-white sm:text-xl/8">
                  <p>
                    “Amet amet eget scelerisque tellus sit neque faucibus non
                    eleifend. Integer eu praesent at a. Ornare arcu gravida
                    natoque erat et cursus tortor consequat at. Vulputate
                    gravida sociis enim nullam ultricies habitant malesuada
                    lorem ac.”
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-base text-white">
                  <div className="font-semibold">Judith Black</div>
                  <div className="mt-1">CEO of Tuple</div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        {/* Pricing section */}
        <div className="py-24 sm:pt-48">
          <div className="mx-auto px-6 lg:px-8 max-w-7xl">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="font-semibold text-base/7 text-indigo-600">
                Pricing
              </h2>
              <p className="mt-2 font-semibold text-4xl text-gray-900 text-pretty sm:text-5xl lg:text-balance tracking-tight">
                Pricing that grows with you
              </p>
              <p className="mt-6 text-gray-600 text-lg/8 text-pretty">
                Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
                Suspendisse eget egestas a elementum pulvinar et feugiat blandit
                at. In mi viverra elit nunc.
              </p>
            </div>
            <div className="gap-y-8 grid grid-cols-1 lg:grid-cols-3 mx-auto lg:mx-0 mt-16 sm:mt-20 max-w-md lg:max-w-none isolate">
              {tiers.map((tier, tierIdx) => (
                <div
                  key={tier.id}
                  className={classNames(
                    tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
                    tierIdx === 0 ? 'lg:rounded-r-none' : '',
                    tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : '',
                    'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10',
                  )}
                >
                  <div>
                    <div className="flex justify-between items-center gap-x-4">
                      <h3
                        id={tier.id}
                        className={classNames(
                          tier.mostPopular
                            ? 'text-indigo-600'
                            : 'text-gray-900',
                          'text-lg/8 font-semibold',
                        )}
                      >
                        {tier.name}
                      </h3>
                      {tier.mostPopular ? (
                        <p className="bg-indigo-600/10 px-2.5 py-1 rounded-full font-semibold text-indigo-600 text-xs/5">
                          Most popular
                        </p>
                      ) : null}
                    </div>
                    <p className="mt-4 text-gray-600 text-sm/6">
                      {tier.description}
                    </p>
                    <p className="flex items-baseline gap-x-1 mt-6">
                      <span className="font-semibold text-4xl text-gray-900 tracking-tight">
                        {tier.priceMonthly}
                      </span>
                      <span className="font-semibold text-gray-600 text-sm/6">
                        /month
                      </span>
                    </p>
                    <ul
                      role="list"
                      className="space-y-3 mt-8 text-gray-600 text-sm/6"
                    >
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckIcon
                            aria-hidden="true"
                            className="flex-none w-5 h-6 text-indigo-600"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className={classNames(
                      tier.mostPopular
                        ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                        : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                      'mt-8 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                    )}
                  >
                    Buy plan
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mx-auto px-6 lg:px-8 sm:pt-12 pb-8 sm:pb-24 lg:pb-32 divide-y divide-gray-900/10 max-w-2xl lg:max-w-7xl">
          <h2 className="font-semibold text-4xl text-gray-900 sm:text-5xl tracking-tight">
            Frequently asked questions
          </h2>
          <dl className="space-y-8 mt-10 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="lg:gap-8 lg:grid lg:grid-cols-12 pt-8"
              >
                <dt className="lg:col-span-5 font-semibold text-base/7 text-gray-900">
                  {faq.question}
                </dt>
                <dd className="lg:col-span-7 mt-4 lg:mt-0">
                  <p className="text-base/7 text-gray-600">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* CTA section */}
        <div className="relative -z-10 mt-32 px-6 lg:px-8">
          <div
            aria-hidden="true"
            className="top-1/2 sm:top-auto sm:right-[calc(50%-6rem)] sm:bottom-0 -z-10 absolute inset-x-0 flex justify-center sm:justify-end blur-3xl transform-gpu sm:transform-gpu -translate-y-1/2 sm:translate-y-0 overflow-hidden"
          >
            <div
              style={{
                clipPath:
                  'polygon(73.6% 48.6%, 91.7% 88.5%, 100% 53.9%, 97.4% 18.1%, 92.5% 15.4%, 75.7% 36.3%, 55.3% 52.8%, 46.5% 50.9%, 45% 37.4%, 50.3% 13.1%, 21.3% 36.2%, 0.1% 0.1%, 5.4% 49.1%, 21.4% 36.4%, 58.9% 100%, 73.6% 48.6%)',
              }}
              className="flex-none bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-25 w-[69.25rem] aspect-[1108/632]"
            />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-semibold text-4xl text-balance text-gray-900 sm:text-5xl tracking-tight">
              Boost your productivity. Start using our app today.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-gray-600 text-lg/8 text-pretty">
              Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
              anim id veniam aliqua proident excepteur commodo do ea.
            </p>
            <div className="flex justify-center items-center gap-x-6 mt-10">
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
          <div
            aria-hidden="true"
            className="sm:block top-full right-0 left-1/2 -z-10 absolute hidden blur-3xl transform-gpu -translate-y-1/2 overflow-hidden"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 w-[72.1875rem] aspect-[1155/678]"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mx-auto mt-32 px-6 lg:px-8 max-w-7xl">
        <div className="border-gray-900/10 py-16 sm:py-24 lg:py-32 border-t">
          <div className="xl:gap-8 xl:grid xl:grid-cols-3">
            <img
              alt="Company name"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="h-9"
            />
            <div className="gap-8 grid grid-cols-2 xl:col-span-2 mt-16 xl:mt-0">
              <div className="md:gap-8 md:grid md:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm/6">
                    Solutions
                  </h3>
                  <ul role="list" className="space-y-4 mt-6">
                    {footerNavigation.solutions.map((item) => (
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
                    {footerNavigation.support.map((item) => (
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
                    {footerNavigation.company.map((item) => (
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
                    {footerNavigation.legal.map((item) => (
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
  );
}
