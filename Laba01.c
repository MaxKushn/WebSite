#include <stdio.h> //(a-b)^2 = (a+b)^2-4ab    a/(n+2), b/(n+3)
 
int a, b, c, err_a;
#define DENOM1 26
#define DENOM2 27
 
int main(void)
{
    int again = 0;
    int a_c, b_c;
    int left_a, right_a;
    do
    {
        printf("Input a: ");
        scanf("%d", &a);
        a_c = a / (DENOM1);
        printf("Input b: ");
        scanf("%d", &b);
        b_c = b / (DENOM2);
       
        int left_c = (a_c - b_c) * (a_c - b_c);
        int right_c = (a_c + b_c) * (a_c + b_c) - 4 * a_c * b_c;
 
        printf("Left part on C is %d \n", left_c);
        printf("Right part on C is %d \n", right_c);
 
//      printf("Do you want to run again? 1 - yes, 0 - no\n");
//      scanf("%d", &again);
        _asm{
            mov err_a, 0
 
            //a_a = a / DENOM
            mov ebx, DENOM1
            mov eax, a
            cdq
            idiv ebx
            mov esi, eax
            //b_a = b / DENOM
            mov ebx, DENOM2
            mov eax, b
            cdq
            idiv ebx
            mov edi, eax
            ////////////////////////////left   (a-b)(a-b)  
            mov eax, esi
            mov ebx, edi
            sub eax, ebx //(a-b)
            jo Error
            imul eax, eax //^2
            jo Error
            mov left_a, eax
            ////////////////////////////right  (a+b)^2-4ab
            mov eax, esi
            mov ebx, edi
            add eax, ebx //(a+b)
            jo Error
            imul eax, eax //^2  eax - (a+b)^
            jo Error
            mov ecx, esi  //ecx - a
            imul ecx, 4
            jo Error
            imul ecx, ebx //ecx - 4ab
            jo Error
            sub eax, ecx
            jo Error
            mov right_a, eax // (a+b)^2-4ab in right_a
Error:     
            mov err_a, 1
No_Error:
           
        }
        if(err_a)
            printf("Error\n");
        else{
            printf("Left_a is %d\n", left_a);
            printf("Right_a is %d\n", right_a);
        }
    }while(/*again = */1);
 
    return 0;
}