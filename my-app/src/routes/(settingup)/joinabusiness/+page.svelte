<script lang="ts">
    import { Input, Label, Helper, Button, Card, Checkbox, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell} from 'flowbite-svelte';

    const invites = [
        {
            companyName: "archie",
            companyCode: "123",
            invitedBy: "a@a.com",
            inviteID: 1,
        },
        {
            companyName: "becky",
            companyCode: "456",
            invitedBy: "b@b.com",
            inviteID: 2,
        },
    ]

</script>

<div class="formWrapper"> 
        <Card class="text-center" size="lg" padding="xl">
            <h3 class="text-xl font-medium text-gray-900 dark:text-white">Know the companies register code?</h3>
            <p class="text-sm dark:text-white">Enter it here to request an invite</p>
            <form class="flex flex-col space-y-6" action="/">
                <!-- <h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3> -->
                <div class="mb-1 mt-6">
                    <Label for="code" class="mb-2 text-left">Company Code</Label>
                    <Input  name="code" type="text" id="code" placeholder="abcde1" required/>
                </div>
                <Button type="submit">Request invite</Button>
            </form>
        </Card>
        <Card class="text-center mt-4" size="lg" padding="xl">
            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Your invites:</h3>
            <Table>
                <TableHead>
                  <TableHeadCell>Company name</TableHeadCell>
                  <TableHeadCell>Company code</TableHeadCell>
                  <TableHeadCell>Invited by</TableHeadCell>
                  <TableHeadCell>Action?</TableHeadCell>
                </TableHead>

                <TableBody tableBodyClass="divide-y">
                  {#each invites as invite, i}
                    <TableBodyRow>
                    <TableBodyCell>{invite.companyName}</TableBodyCell>
                    <TableBodyCell>{invite.companyCode}</TableBodyCell>
                    <TableBodyCell>{invite.invitedBy}</TableBodyCell>
                    <TableBodyCell>
                        <Button color="green">
                            Accept
                            <input type="hidden" name="inviteID" value={invite.inviteID}>
                        </Button>
                        <Button color="red">
                            Reject
                            <input type="hidden" name="inviteID" value={invite.inviteID}>
                        </Button>
                    </TableBodyCell>
                  </TableBodyRow>
                  
                  {/each}
                </TableBody>
              </Table>
        </Card>
</div>

<style>
    .formWrapper{
        width: 100%;
        display:flex;
        justify-content: center;
        flex-direction: column;
        flex-wrap:wrap;
        align-items: center;
        margin-top: 1em;
    }
</style>