import logo from '../animation/logo';
import fly from '../animation/fly'
import banner from '../animation/banner'
import planet from '../animation/planet'


export const logoAnimation = {
  loop: false,
  autoplay: true,
  animationData: logo,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

export const flyAnimation = {
  loop: true,
  autoplay: true,
  animationData: fly,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

export const bannerAnimation = {
  loop: true,
  autoplay: true,
  animationData: banner,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

export const planetAnimation = {
  loop: true,
  autoplay: true,
  animationData: planet,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};