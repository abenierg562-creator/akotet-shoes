import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroBanner from '@/assets/hero-banner.jpg';

const HeroBanner = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative mt-3 rounded-2xl overflow-hidden mx-2"
      style={{
        backgroundImage: `url(${heroBanner})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        aspectRatio: '16/9',
      }}
    >
      {/* Left-side gradient so text is readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/15 to-transparent" />

      {/* Text + button top-left above the shoes */}
      <div className="absolute top-0 left-0 flex flex-col pt-2 px-4 z-10 max-w-[45%]">
        <motion.p
          className="text-[8px] font-bold tracking-[0.2em] uppercase text-amber-400 mb-0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          New Collection
        </motion.p>
        <motion.h2
          className="text-white font-black text-lg leading-tight tracking-tight drop-shadow-md"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          Walk in{' '}
          <span className="text-amber-300">Style.</span>
        </motion.h2>
        <motion.button
          onClick={() => navigate('/brands')}
          className="mt-1.5 text-[10px] font-bold px-4 py-1.5 rounded-full w-fit shadow-lg bg-amber-400 text-neutral-900 hover:bg-amber-300 transition-all"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          whileTap={{ scale: 0.95 }}
        >
          Shop Now →
        </motion.button>
      </div>
    </div>
  );
};

export default HeroBanner;
