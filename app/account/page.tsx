import { AvatarFallback } from "@/components/ui/avatar";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAuthSession } from "@/lib/auth";
import { Avatar } from "@radix-ui/react-avatar";

export default async function page() {
    const session = await getAuthSession();

    if (!session) {
        throw new Error('No session find')
    }
  return (
    <Card>
        <CardHeader>
            <Avatar>
                <AvatarFallback></AvatarFallback>
            </Avatar>
            <CardTitle>{session.user.email}</CardTitle>
            <CardDescription>{session.user.name}</CardDescription>
        </CardHeader>
    </Card>
  )
}



