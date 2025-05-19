


function Base(){
  return (
    <>
    <div>base</div>
    <div>
        <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.96/build/spline-viewer.js"></script>
        <spline-viewer url="https://prod.spline.design/0A0NiSYC0r1CTfAB/scene.splinecode"></spline-viewer>
    </div>
    <div>
        <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.96/build/spline-viewer.js"></script>
        <spline-viewer url="https://prod.spline.design/icDBJZAWN6X0QpLe/scene.splinecode"></spline-viewer>
    </div>
    </>
  )
  // remove text from spline and add div.texts here use css to arrange them on it and give them navlink so that u can redirect.
}

export default Base