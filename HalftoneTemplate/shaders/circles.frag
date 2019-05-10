// colour fragment shader
// Andy Baker
// Digital Whorehouse Productions 2008

uniform sampler2D	grabTexture;
varying vec2		texCoord;

void main(void)
{
	//vec3 red				= vec3(1.0, 0.0, 0.0);  
	vec3 colour;
	
	vec2 scaledTexCoord;   // pixel coordinates
	
	scaledTexCoord.x = texCoord.x * 800;
	scaledTexCoord.y = texCoord.y * 800;
	
	vec3 w					= vec3(1.0, 1.0, 1.0);  // white
	vec3 b					= vec3(0.0, 0.0, 0.0); // black
	float SqrDist;
	int seg					= 80;  // segment
	float sqrRad;
	
	vec4 grab;  // grab texture
	
	int gridX				= 800 / seg;  // 800 / 80 to make a 10 by 10 grid in x axis
	int gridY				= 800 / seg;  // 800 / 80 to make a 10 by 10 grid in y axis
	
	float startR					= gridX / 2;  // radius of circle
	float r = 5;  // radius
	
	
	vec2 SqrCentre; // centre of circle
	vec2 br; // Bottom right pixel
	
		
		for(int i = 0; i < gridX; i++)
		{
			for(int j = 0; j < gridY; j++)
			{
				// finding bottom right pixel
				if ((mod(int(scaledTexCoord.x + i + 1), gridX) == 0) && (mod(int(scaledTexCoord.y - j + 1), gridY) == 0) && scaledTexCoord.y  - j + 1 != 800)
				{
					br.x = ((scaledTexCoord.x + i) / 800);
					br.y = ((scaledTexCoord.y - j) / 800);
					grab = vec4(texture2D(grabTexture, br.xy));
					startR *= grab.x;  // grab x coordinate
					
					
					
				}
			}
		}
	
	br.x *= 800;
	br.y *= 800;
	SqrCentre.x = br.x - r;
	SqrCentre.y = br.y + r;
	
	// DIstance from centre to each pixel
	SqrDist = (((SqrCentre.x - scaledTexCoord.x)*(SqrCentre.x - scaledTexCoord.x)) + ((SqrCentre.y - scaledTexCoord.y)*(SqrCentre.y - scaledTexCoord.y)));
	sqrRad = startR * startR;
	
	if(SqrDist < sqrRad)
	{
		colour = w;
	}
	else
	{
		colour = b;
	}
	
	gl_FragColor = vec4(vec3(colour),1.0);
	
}