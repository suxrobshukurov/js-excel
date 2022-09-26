import {$} from '@core/dom';

export function resizeHandler($root, event) {
  const $resizer = $(event.target);
  const $parent = $resizer.closest('[data-type="resizable"]');
  const resizerID = $parent.data.col;
  const coords = $parent.getCoords();
  const type = $resizer.data.resize;
  let value;

  $resizer.css({
    opacity: 1,
  });

  if (type === 'col') {
    document.onmousemove = (e) => {
      const delta = e.pageX - coords.right;
      value = coords.width + delta;
      $resizer.css({bottom: '-5000px', right: -delta + 'px'});
    };
  } else {
    document.onmousemove = (e) => {
      const delta = e.pageY - coords.bottom;
      value = coords.height + delta;
      $resizer.css({bottom: -delta + 'px', right: '-5000px'});
    };
  }
  document.onmouseup = () => {
    if (type === 'col') {
      $parent.css({width: value + 'px'});

      $root.findAll(`[data-col="${resizerID}"]`).forEach((el) => {
        el.style.width = value + 'px';
      });
    } else {
      $parent.css({height: value + 'px'});
    }
    document.onmousemove = null;
    document.onmouseup = null;
    $resizer.css({
      opacity: 0,
      bottom: 0,
      right: 0,
    });
  };
}