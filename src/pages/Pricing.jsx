'use client';

import React, { useState } from 'react';
import { Dialog, DialogPanel, Radio, RadioGroup } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { CheckIcon } from '@heroicons/react/20/solid';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];
const pricing = {
  frequencies: [
    { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
    { value: 'annually', label: 'Annually', priceSuffix: '/year' },
  ],
  tiers: [
    {
      name: 'Freelancer',
      id: 'tier-freelancer',
      href: '#',
      price: { monthly: '$19', annually: '$199' },
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
      price: { monthly: '$29', annually: '$299' },
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
      price: { monthly: '$59', annually: '$599' },
      description: 'Dedicated support and infrastructure for your company.',
      features: [
        'Unlimited products',
        'Unlimited subscribers',
        'Advanced analytics',
        '1-hour, dedicated support response time',
        'Marketing automations',
        'Custom reporting tools',
      ],
      mostPopular: false,
    },
  ],
};
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

export default function Pricing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [frequency, setFrequency] = useState(pricing.frequencies[0]);

  return (
    <div className="bg-gray-900">
      {/* Header */}
      <header>
        <nav
          aria-label="Global"
          className="flex justify-between items-center mx-auto lg:px-8 p-6 max-w-7xl"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                className="w-auto h-8"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex justify-center items-center -m-2.5 p-2.5 rounded-md text-gray-400"
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
                className="font-semibold text-sm/6 text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="lg:flex lg:flex-1 lg:justify-end hidden">
            <a href="#" className="font-semibold text-sm/6 text-white">
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
          <DialogPanel className="right-0 z-50 fixed inset-y-0 bg-gray-900 px-6 py-6 sm:ring-1 sm:ring-white/10 w-full sm:max-w-sm overflow-y-auto">
            <div className="flex justify-between items-center">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                  className="w-auto h-8"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 p-2.5 rounded-md text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="w-6 h-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block hover:bg-gray-800 -mx-3 px-3 py-2 rounded-lg font-semibold text-base/7 text-white"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="block hover:bg-gray-800 -mx-3 px-3 py-2.5 rounded-lg font-semibold text-base/7 text-white"
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
        {/* Pricing section */}
        <div className="mx-auto mt-16 sm:mt-32 px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-semibold text-base/7 text-indigo-400">
              Pricing
            </h1>
            <p className="mt-2 font-semibold text-5xl text-balance text-white sm:text-6xl tracking-tight">
              Pricing that grows with you
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl font-medium text-center text-gray-400 text-lg text-pretty sm:text-xl/8">
            Choose an affordable plan that’s packed with the best features for
            engaging your audience, creating customer loyalty, and driving
            sales.
          </p>
          <div className="flex justify-center mt-16">
            <fieldset aria-label="Payment frequency">
              <RadioGroup
                value={frequency}
                onChange={setFrequency}
                className="gap-x-1 grid grid-cols-2 bg-white/5 p-1 rounded-full font-semibold text-center text-white text-xs/5"
              >
                {pricing.frequencies.map((option) => (
                  <Radio
                    key={option.value}
                    value={option}
                    className="data-[checked]:bg-indigo-500 px-2.5 py-1 rounded-full cursor-pointer"
                  >
                    {option.label}
                  </Radio>
                ))}
              </RadioGroup>
            </fieldset>
          </div>
          <div className="gap-8 grid grid-cols-1 lg:grid-cols-3 mx-auto lg:mx-0 mt-10 max-w-md lg:max-w-none isolate">
            {pricing.tiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-white/5 ring-2 ring-indigo-500'
                    : 'ring-1 ring-white/10',
                  'rounded-3xl p-8 xl:p-10',
                )}
              >
                <div className="flex justify-between items-center gap-x-4">
                  <h2
                    id={tier.id}
                    className="font-semibold text-lg/8 text-white"
                  >
                    {tier.name}
                  </h2>
                  {tier.mostPopular ? (
                    <p className="bg-indigo-500 px-2.5 py-1 rounded-full font-semibold text-white text-xs/5">
                      Most popular
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-gray-300 text-sm/6">
                  {tier.description}
                </p>
                <p className="flex items-baseline gap-x-1 mt-6">
                  <span className="font-semibold text-4xl text-white tracking-tight">
                    {tier.price[frequency.value]}
                  </span>
                  <span className="font-semibold text-gray-300 text-sm/6">
                    {frequency.priceSuffix}
                  </span>
                </p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                      : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                    'mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                  )}
                >
                  Buy plan
                </a>
                <ul
                  role="list"
                  className="space-y-3 mt-8 xl:mt-10 text-gray-300 text-sm/6"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        aria-hidden="true"
                        className="flex-none w-5 h-6 text-white"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial section */}
        <div className="mx-auto mt-24 sm:mt-56 px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto lg:mx-0 max-w-2xl lg:max-w-none">
            <div className="flex flex-col lg:pr-8 xl:pr-20 pb-10 sm:pb-16 lg:pb-0">
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/tuple-logo-white.svg"
                className="h-12 self-start"
              />
              <figure className="flex flex-col flex-auto justify-between mt-10">
                <blockquote className="text-lg/8 text-white">
                  <p>
                    “Amet amet eget scelerisque tellus sit neque faucibus non
                    eleifend. Integer eu praesent at a. Ornare arcu gravida
                    natoque erat et cursus tortor consequat at. Vulputate
                    gravida sociis enim nullam ultricies habitant malesuada
                    lorem ac. Tincidunt urna dui pellentesque sagittis.”
                  </p>
                </blockquote>
                <figcaption className="flex items-center gap-x-6 mt-10">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="bg-gray-800 rounded-full w-14 h-14"
                  />
                  <div className="text-base">
                    <div className="font-semibold text-white">Judith Black</div>
                    <div className="mt-1 text-gray-400">CEO of Tuple</div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="flex flex-col border-white/10 pt-10 sm:pt-16 lg:pt-0 lg:pl-8 xl:pl-20 border-t lg:border-t-0 lg:border-l">
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/reform-logo-white.svg"
                className="h-12 self-start"
              />
              <figure className="flex flex-col flex-auto justify-between mt-10">
                <blockquote className="text-lg/8 text-white">
                  <p>
                    “Excepteur veniam labore ullamco eiusmod. Pariatur consequat
                    proident duis dolore nulla veniam reprehenderit nisi officia
                    voluptate incididunt exercitation exercitation elit. Nostrud
                    veniam sint dolor nisi ullamco.”
                  </p>
                </blockquote>
                <figcaption className="flex items-center gap-x-6 mt-10">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="bg-gray-800 rounded-full w-14 h-14"
                  />
                  <div className="text-base">
                    <div className="font-semibold text-white">
                      Joseph Rodriguez
                    </div>
                    <div className="mt-1 text-gray-400">CEO of Reform</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        {/* FAQ section */}
        <div className="mx-auto mt-24 sm:mt-56 px-6 lg:px-8 max-w-7xl">
          <h2 className="font-semibold text-4xl text-white sm:text-5xl tracking-tight">
            Frequently asked questions
          </h2>
          <p className="mt-6 max-w-2xl text-base/7 text-gray-300">
            Have a different question and can’t find the answer you’re looking
            for? Reach out to our support team by{' '}
            <a
              href="#"
              className="font-semibold text-indigo-400 hover:text-indigo-300"
            >
              sending us an email
            </a>{' '}
            and we’ll get back to you as soon as we can.
          </p>
          <div className="mt-20">
            <dl className="sm:gap-x-6 sm:gap-y-16 lg:gap-x-10 space-y-16 sm:space-y-0 sm:grid sm:grid-cols-2">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className="font-semibold text-base/7 text-white">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-300">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mx-auto mt-24 sm:mt-56 px-6 lg:px-8 max-w-7xl">
        <div className="border-white/10 pt-20 sm:pt-24 pb-8 border-t">
          <div className="xl:gap-8 xl:grid xl:grid-cols-3">
            <div className="gap-8 grid grid-cols-2 xl:col-span-2">
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
            <div className="mt-10 xl:mt-0">
              <h3 className="font-semibold text-sm/6 text-white">
                Subscribe to our newsletter
              </h3>
              <p className="mt-2 text-gray-300 text-sm/6">
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
              <form className="sm:flex mt-6 sm:max-w-md">
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
                  className="border-0 bg-white/5 shadow-sm px-3 py-1.5 rounded-md ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-500 ring-inset focus:ring-inset w-full sm:w-64 xl:w-full min-w-0 text-base text-white placeholder:text-gray-500 sm:text-sm/6 appearance-none"
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
          </div>
          <div className="md:flex md:justify-between md:items-center border-white/10 mt-16 sm:mt-20 lg:mt-24 pt-8 border-t">
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
}
