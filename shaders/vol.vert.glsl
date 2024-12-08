#version 300 es

in vec3 aPosition;

uniform mat4x4 u_v;
uniform mat4x4 u_p;
uniform vec3 eye_pos;
uniform vec3 volume_scale;

out vec3 vray_dir;
flat out vec3 transformed_eye;

void main(void) {
	// TODO: For non-uniform size volumes we need to transform them differently as well
	// to center them properly
	vec3 volume_translation = vec3(0) - volume_scale * 0.5;
	gl_Position = u_p * u_v * vec4(aPosition * volume_scale + volume_translation, 1);
	transformed_eye = (eye_pos - volume_translation) / volume_scale;
	vray_dir = aPosition - transformed_eye;
}