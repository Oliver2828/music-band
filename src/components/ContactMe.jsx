import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, UserGroupIcon } from '@heroicons/react/24/solid';

export default function ContactMe() {
  const contacts = [
    {
      icon: UserGroupIcon,
      title: "Band Name",
      value: "TRIUMPH ACOUSTIC BAND ENTERTAINMENT",
    },
    {
      icon: PhoneIcon,
      title: "Phone",
      value: "(309) 204 - 2879",
      link: "tel:309-204-2879"
    },
    {
      icon: EnvelopeIcon,
      title: "Email",
      value: "triumph_acoustic@aol.com",
      link: "mailto:triumph_acoustic@aol.com"
    },
    {
      icon: MapPinIcon,
      title: "Address",
      value: "19067 to Bath, PA 18014"
    }
  ];

  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16 space-y-4">
            <motion.h2
              initial={{ y: -20 }}
              whileInView={{ y: 0 }}
              className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-100 mb-6"
            >
              Let's Make Music Together!
            </motion.h2>
            <p className="text-xl text-gray-400 max-w-xl mx-auto">
              Get in touch for bookings, events, or just to say hello!
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {contacts.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1,
                  type: "spring", 
                  stiffness: 100 
                }}
                viewport={{ once: true }}
                className="group relative bg-gray-800 rounded-2xl p-8 shadow-2xl hover:bg-gray-750 transition-all duration-300 border border-gray-700 hover:border-gray-600"
              >
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center shadow-lg border border-gray-600">
                    <contact.icon className="w-10 h-10 text-gray-300" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                      {contact.title}
                    </h3>
                    {contact.link ? (
                      <a
                        href={contact.link}
                        className="text-xl text-white hover:text-gray-300 transition-colors font-medium hover:underline underline-offset-4"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-xl text-gray-200 font-medium">{contact.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 text-lg font-light italic">
              🎤 Available for weddings, parties, and special events 🎤
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}