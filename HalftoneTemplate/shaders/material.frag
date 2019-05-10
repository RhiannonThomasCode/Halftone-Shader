// colour fragment shader
// Andy Baker
// Digital Whorehouse Productions 2008

varying vec3 normal;  // calculate normal
varying vec3 cameraPosition; // get camera position

void main(void)
{
	vec3	red = vec3(1.0, 0.0, 0.0);
	vec3 	BlinnPhong;
	vec3	IntensityAmbient = vec3(1.0, 0.0, 0.0); // ambient light value
	vec3	IntensityLight = vec3(1.0, 1.0, 1.0); // light intensity value
	vec3	ViewVec = normalize(-cameraPosition); // normalizing the camera position
	vec3	N = normalize(normal);
	vec3	LightPos = vec3(4.0, 0.0, 0.0);
	
	float 	ns = 50.0;
	float	ka = 0.6;
	float	kd = 0.8;
	float	ks = 1.0;
	
	vec3	VecLight = normalize(LightPos - cameraPosition);
	vec3	H = normalize(VecLight + ViewVec);
	
	BlinnPhong = clamp(vec3(ka * IntensityAmbient) + ((kd * IntensityLight) * (max(dot(VecLight, N),0.0))) + ((ks * IntensityLight) * pow((max(dot(N, H),0.0)),ns)), 0.0, 1.0);
	
	gl_FragColor = vec4(vec3(BlinnPhong), 1.0);
	
}