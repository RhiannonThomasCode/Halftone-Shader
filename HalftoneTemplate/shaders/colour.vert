// colour vertex shader
// Andy Baker
// Digital Whorehouse Productions 2008

varying float texCoord;
varying vec3 position;

void main(void)
{

	gl_Position	= ftransform(); // Start positon
	texCoord	= gl_MultiTexCoord0.xy;
}
