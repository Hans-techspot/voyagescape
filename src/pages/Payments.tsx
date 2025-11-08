import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { CreditCard, Shield, Lock, CheckCircle } from 'lucide-react';

const paymentSchema = z.object({
  amount: z.string().min(1, 'Amount is required').regex(/^\d+(\.\d{1,2})?$/, 'Invalid amount'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  cardNumber: z.string().regex(/^\d{16}$/, 'Card number must be 16 digits'),
  expiry: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Invalid expiry date (MM/YY)'),
  cvc: z.string().regex(/^\d{3}$/, 'CVC must be 3 digits'),
});

type PaymentForm = z.infer<typeof paymentSchema>;

const Payments = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<PaymentForm>({
    resolver: zodResolver(paymentSchema),
  });

  const onSubmit = (data: PaymentForm) => {
    // Mock payment processing
    const isSuccess = Math.random() > 0.1; // 90% success rate for demo

    if (isSuccess) {
      toast.success('Payment successful! Your booking is confirmed.');
      reset();
    } else {
      toast.error('Payment failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Secure Payment Portal
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Book your dream vacation with confidence. Our payment system is powered by industry-leading security.
          </p>
          <div className="flex justify-center items-center mt-6 space-x-4">
            <Shield className="w-8 h-8 text-green-500" />
            <span className="text-lg font-semibold text-gray-700">SSL Encrypted</span>
            <Lock className="w-8 h-8 text-blue-500" />
            <span className="text-lg font-semibold text-gray-700">Secure Checkout</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <CreditCard className="w-6 h-6 text-white" />
                <span className="text-white font-semibold text-lg">Stripe-Powered Payment</span>
              </div>
              <div className="text-white text-sm opacity-75">Demo Mode</div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Booking Amount ($)
              </label>
              <input
                {...register('amount')}
                type="text"
                placeholder="1000.00"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cardholder Name
              </label>
              <input
                {...register('name')}
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Card Number
              </label>
              <input
                {...register('cardNumber')}
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber.message}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expiry Date
                </label>
                <input
                  {...register('expiry')}
                  type="text"
                  placeholder="MM/YY"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                {errors.expiry && <p className="text-red-500 text-sm mt-1">{errors.expiry.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CVC
                </label>
                <input
                  {...register('cvc')}
                  type="text"
                  placeholder="123"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                {errors.cvc && <p className="text-red-500 text-sm mt-1">{errors.cvc.message}</p>}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <CheckCircle className="w-5 h-5" />
              <span>Complete Payment</span>
            </motion.button>
          </form>

          <div className="bg-gray-50 px-8 py-4 text-center text-sm text-gray-500">
            This is a demo payment form. No real charges will be made.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            Need help? Contact our support team for assistance with your booking.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
          >
            Contact Support
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Payments;