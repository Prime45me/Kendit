"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsModal = ({ isOpen, onClose }: TermsModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[6000] bg-black/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[6001] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto pointer-events-auto
                         bg-black-100 border border-purple-500/30 rounded-3xl p-6 md:p-10
                         shadow-[0_0_40px_rgba(139,92,246,0.15)] scrollbar-hide"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
              >
                <IoClose size={24} />
              </button>

              {/* Content */}
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-2 text-purple font-display">Terms & Conditions</h2>
                <p className="text-sm text-white-100 mb-6">Effective Date: March 30, 2026</p>
                
                <p className="text-base leading-relaxed mb-8 text-white-200">
                  By engaging our services, you agree to the following <span className="text-purple font-medium">Terms & Conditions</span>.
                </p>

                <div className="space-y-8 text-white-200">
                  <section>
                    <h3 className="text-lg font-semibold text-white mb-3 underline decoration-purple/30 underline-offset-4">1. Scope of Services</h3>
                    <p className="text-sm leading-relaxed">
                      All services are provided based on an agreed project scope, including deliverables, timelines, and pricing. Any work requested outside this scope may incur additional charges.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-white mb-3 underline decoration-purple/30 underline-offset-4">2. Payment Terms</h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm leading-loose">
                      <li>A 50% non-refundable deposit is required before work begins.</li>
                      <li>The remaining balance must be paid before final delivery.</li>
                      <li>Delays in payment may result in delayed delivery or suspension of work.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-white mb-3 underline decoration-purple/30 underline-offset-4">3. Revisions</h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm leading-loose">
                      <li>A reasonable number of revisions are included within the project scope.</li>
                      <li>Additional revisions or major changes may attract extra fees.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-white mb-3 underline decoration-purple/30 underline-offset-4">4. Timelines</h3>
                    <p className="text-sm leading-relaxed">
                      Project timelines are agreed in advance but depend on timely client feedback and delivery of required materials. Delays from the client may affect delivery dates.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-white mb-3 underline decoration-purple/30 underline-offset-4">5. Client Responsibilities</h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm leading-loose">
                      <li>Provide all necessary content and instructions on time</li>
                      <li>Ensure they have rights to all materials supplied</li>
                      <li>Communicate feedback clearly and promptly</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-white mb-3 underline decoration-purple/30 underline-offset-4">6. Ownership & Usage</h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm leading-loose">
                      <li>Final deliverables become the client’s property only after full payment is made.</li>
                      <li>We reserve the right to showcase completed work for portfolio and promotional purposes.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-white mb-3 underline decoration-purple/30 underline-offset-4">7. Cancellation</h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm leading-loose">
                      <li>Deposits are non-refundable.</li>
                      <li>If a project is canceled, payment will be required for work completed up to that point.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-white mb-3 underline decoration-purple/30 underline-offset-4">8. Liability</h3>
                    <p className="text-sm leading-relaxed">
                      We are not responsible for indirect losses, including loss of profits or business opportunities. Our liability is limited to the amount paid for the service.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-white mb-3 underline decoration-purple/30 underline-offset-4">9. Confidentiality</h3>
                    <p className="text-sm leading-relaxed">
                      All client information and project details will be kept confidential unless permission is given.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-white mb-3 underline decoration-purple/30 underline-offset-4">10. Updates to Terms</h3>
                    <p className="text-sm leading-relaxed">
                      We may update these Terms & Conditions at any time. Continued use of our services means you accept any updates.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-white mb-3 underline decoration-purple/30 underline-offset-4">11. Governing Law</h3>
                    <p className="text-sm leading-relaxed">
                      These Terms are governed by the laws of Ghana.
                    </p>
                  </section>

                  <section className="pt-8 border-t border-white/10 mt-12">
                    <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
                    <div className="text-sm space-y-2 text-white-100">
                      <p className="font-medium text-white">Kendits Creative Studio</p>
                      <p className="flex items-center gap-2">
                        <span className="text-purple">Email:</span> opokuacheampongkenneth360@gmail.com
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="text-purple">Phone:</span> +233 (0) 24 660 1022
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TermsModal;
