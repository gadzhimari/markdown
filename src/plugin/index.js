/**
 * Copyright 2016 Dialog LLC <info@dlg.im>
 */

import paragraph from './paragraph';
import links from './links';
import emphasis from './emphasis';
// import mention from './mention';

function dialog(md) {
  md.use(paragraph);
  md.use(links);
  md.use(emphasis);
  // md.use(mention);
}

export default dialog;