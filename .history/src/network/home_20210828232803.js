import {network} from './network';

export function getHomeData(){
  return network({
    url: '/ex?o=jsonp&i=mm_12852562_1778064_32582817&cg=ac742bdfa53d451701fcb951c41d88f5&pvid=a23948aead2b279e20c75999457482e1&pcabid=12192864&nk=&_ksTS=1630158753656_251&cb=jsonp252'
  })
}