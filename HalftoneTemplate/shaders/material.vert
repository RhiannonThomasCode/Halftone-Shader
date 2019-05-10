// colour vertex shader
// Andy Baker
// Digital Whorehouse Productions 2008

varying vec3 normal;  // calculate normal
varying vec3 cameraPosition; // get camera position

void main(void)
{
	gl_Position	= ftransform();

	normal	= gl_NormalMatrix * gl_Normal; // Gets the normal from torus
	cameraPosition = vec3(gl_ModelViewMatrix * gl_Vertex);
}