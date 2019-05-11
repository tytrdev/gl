export default "precision mediump float;\n\nuniform vec3 AMBIENT_LIGHT;\n\nstruct DirectionalLight {\n\tvec3 direction;\n\tvec3 color;\n\tfloat intensity;\n};\n\nuniform DirectionalLight DIRECTIONAL_LIGHTS[8];\n\nstruct PointLight {\n\tvec3 location;\n\tvec3 color;\n\tfloat intensity;\n\t// TODO fall-off etc\n};\n\nuniform PointLight POINT_LIGHTS[8];\n\nuniform vec3 COLOR;";