import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlay, FiX } from 'react-icons/fi';

const videos = [
  {
    id: 'v1',
    title: 'The Secret of Natu Kodi Pulusu',
    thumbnail: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop',
    duration: '2:45'
  },
  {
    id: 'v2',
    title: 'Hand Pounding Masalas',
    thumbnail: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop',
    duration: '1:30'
  },
  {
    id: 'v3',
    title: 'Customer Review: A True Godavari Experience',
    thumbnail: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop',
    duration: '3:15'
  }
];

const VideoGallery = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="py-24 bg-brand-bg relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-playfair font-bold text-dark mb-4">Behind the Scenes</h2>
            <p className="text-dark/70 text-lg">Watch how we bring the authentic flavours of Godavari to life in our premium cloud kitchen.</p>
          </div>
          <button className="mt-6 md:mt-0 text-primary font-bold hover:underline shrink-0">View All Videos</button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div 
              key={video.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative cursor-pointer"
              onClick={() => setActiveVideo(video)}
            >
              <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg border border-dark/5">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/20 transition-colors"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-xl">
                    <FiPlay className="text-white text-2xl ml-1" />
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 bg-dark/80 text-white text-xs px-2 py-1 rounded font-mono">
                  {video.duration}
                </div>
              </div>
              <h3 className="mt-4 font-bold text-dark text-lg group-hover:text-primary transition-colors">{video.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/90 backdrop-blur-sm"
          >
            <div className="absolute inset-0 cursor-pointer" onClick={() => setActiveVideo(null)}></div>
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video"
            >
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center text-white transition-colors"
              >
                <FiX className="text-xl" />
              </button>
              
              {/* Fake Video Player for Demo */}
              <div className="w-full h-full flex flex-col items-center justify-center bg-dark text-white relative">
                <img src={activeVideo.thumbnail} className="absolute inset-0 w-full h-full object-cover opacity-50" alt="" />
                <div className="relative z-10 text-center p-8 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10">
                  <FiPlay className="text-6xl text-primary mx-auto mb-4 opacity-80" />
                  <h3 className="text-2xl font-playfair font-bold">{activeVideo.title}</h3>
                  <p className="text-white/50 mt-2 text-sm">Demo Video Player - Implementation ready for YouTube/Vimeo</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoGallery;
