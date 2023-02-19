import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import { API_MESSAGE } from '../../common/constant/message.constants';
import { ResponseContent } from '../../common/interfaces/response.types';

export const useMutationHook = <T extends unknown>(
  request: (payload: T) => Promise<ResponseContent<{ body: { message: string } }>>
) => {
  const mutate = useMutation(request, {
    onSuccess: async data => {
      toast.success(`${data.data.body.message}`);
    },
    onError: (error: Record<any, any>) => {
      toast.error(`${error?.response?.data?.message || API_MESSAGE.GENERIC}`);
    }
  });

  const { mutateAsync, isLoading } = mutate;

  return { mutateAsync, isLoading };
};
