// import { connect } from "@/database/user";
// import { NextRequest, NextResponse } from "next/server";
// import { loginSchema } from "@/app/validator/authSchema";
// import vine , {errors} from "@vinejs/vine";
// import JSONAPIErrorReporter from "@/app/validator/ErrorReporter";
// import bcrypt from "bcryptjs"
// import { User } from '@/schema/userSchema'
// connect();

// export async function POST(request:NextRequest){
//     try {
//         const body = await request.json();
//         vine.errorReporter = () => new JSONAPIErrorReporter();
//         const validator = vine.compile(loginSchema)
        
//         const output = await validator.validate(body)

//         const user = await User.findOne({email:output.email})

//         if(!user){
//             return NextResponse.json({status:200 , error:"User not found"} , {status:200})
//         }
//         else{
//             const checkPassword = bcrypt.compareSync(user.password , output.password)

//             if(!checkPassword){
//             return NextResponse.json({status:200 , message:"Password is incorrect , try again"} , {status:200})
//             }
//             else{
//              return NextResponse.json({status:200 , message:"User logged in"} , {status:200})
//             }
//         }

//     } catch (error) {
//         if(error instanceof errors.E_VALIDATION_ERROR){
//             return NextResponse.json(
//              {status:400 , errors:error.message},
//              {status:200}
//             )
//            }
//     }
// }