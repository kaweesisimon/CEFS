import { StarFilled, StarOutlined } from '@/components/Icons';
import { Page } from '@/components/Page';
import {
    Box,
    Container,
    Divider,
    Grid,
    GridItem,
    Progress,
    Stack,
    Text,
    Textarea,
} from '@chakra-ui/react';

import { Rating } from '@mantine/core';

export default function Reviews() {
    let fill = '#F7FAFC';
    return (
        <Page>
            <Container maxW={'container.xl'}>
                <Stack spacing={4}>
                    <Text align={'center'} fontSize={'4xl'}>
                        Reviews and Ratings
                    </Text>
                    <Text align={'center'} fontSize={'2xl'}>
                        Reviews and ratings are verified and are from people who
                        use the type of device as you.
                    </Text>
                </Stack>

                <Grid templateColumns="repeat(6, 1fr)" mt={'2em'} gap={4}>
                    <GridItem colSpan={2} w="100%">
                        <Stack
                            display={'flex'}
                            flexDirection={'column'}
                            alignItems="flex-start"
                            justifyContent={'space-between'}
                        >
                            <Text fontSize={'7xl'} fontWeight={'extrabold'}>
                                4.8
                            </Text>

                            <Rating
                                fractions={2}
                                defaultValue={4.5}
                                size="lg"
                                color="green"
                            />
                        </Stack>
                    </GridItem>
                    <GridItem colSpan={4} w="100%">
                        <Stack spacing={5}>
                            {Array.from({ length: 5 }).map((_, idx) => (
                                <Progress
                                    colorScheme="whatsapp"
                                    size="md"
                                    value={20 * (5 - idx)}
                                    borderRadius="md"
                                />
                            ))}
                        </Stack>
                    </GridItem>
                </Grid>

                <Stack mt="3em">
                    <Divider />

                    <Text fontSize={'2xl'}>
                        Please rate and add your comment
                    </Text>

                    <Rating size="lg" color={'green'} />
                    <Textarea size={'lg'} placeholder="Write your review" />
                </Stack>
            </Container>
        </Page>
    );
}
