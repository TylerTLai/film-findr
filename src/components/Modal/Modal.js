import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import theme from '../../styles/theme';

const StyledBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

const StyledModal = styled(motion.div)`
  max-width: 70vw;
  margin: 0 auto;
  padding: 0.5em;
  background: ${theme.colors.black};
  border-radius: 10px;
`;

const StyledVideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;

  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const backdropVariant = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
  transition: { ease: 'linear', duration: 0.001 },
};

const modalVariant = {
  hidden: {
    y: '-100vh',
    opacity: 0,
    transition: { stiffness: 300 },
  },
  visible: {
    y: '10vh',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 10,
      mass: 0.1,
      stiffness: 300,
    },
  },
};

const Modal = ({ showModal, setShowModal, trailerKey }) => {
  return (
    <AnimatePresence exitBeforeEnter onExitComplete={() => setShowModal(false)}>
      {showModal && (
        <StyledBackdrop
          variants={backdropVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={() => setShowModal(false)}
        >
          <StyledModal variants={modalVariant} exit="hidden">
            <StyledVideoWrapper>
              <iframe
                title="video"
                src={`https://www.youtube.com/embed/${trailerKey}?controls=1`}
                frameBorder="0"
                allow="accelerometer; gyroscope;"
                allowFullScreen
                modestbranding="1"
              ></iframe>
            </StyledVideoWrapper>
          </StyledModal>
        </StyledBackdrop>
      )}
    </AnimatePresence>
  );
};

export default Modal;
