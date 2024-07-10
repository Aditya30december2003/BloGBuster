// import { connect } from "@/database/user";
// import { NextRequest, NextResponse } from "next/server";
// import { signupSchema } from "@/app/validator/authSchema";
// import vine, { errors } from "@vinejs/vine";
// import JSONAPIErrorReporter from "@/app/validator/ErrorReporter";
// import bcrypt from "bcryptjs";
// import { User } from '@/schema/userSchema'

// connect();


// export async function POST(request: NextRequest) {
//     try {
//       const body = await request.json(); // Parse request body as JSON
//       vine.errorReporter = () => new JSONAPIErrorReporter();
//       const validator = vine.compile(signupSchema);
//       const output = await validator.validate(body);
  
//       const user = await User.findOne({ email: output.email });
  
//       if (user) {
//         return NextResponse.json({
//           status: 400,
//           errors: {
//             email: "Email already exists"
//           }
//         }, { status: 400 }); // Return status 400 for existing user
//       } else {
//         const salt = await bcrypt.genSalt(10); // Generate salt for hashing
//         output.password = await bcrypt.hash(output.password, salt); // Hash password
  
//         await User.create(output); // Create new user in the database
//         return NextResponse.json(
//           { status: 200, message: "User created successfully" },
//           { status: 200 }
//         );
//       }
//     } catch (error) {
//       if (error instanceof errors.E_VALIDATION_ERROR) {
//         return NextResponse.json(
//           { status: 400, errors: error.messages }, // Return validation errors
//           { status: 400 }
//         );
//       }
//       // Handle other errors
//       return NextResponse.json(
//         { status: 500, errors: error.message },
//         { status: 500 }
//       );
//     }
//   }
  