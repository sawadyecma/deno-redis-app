REDIS_NETWORK=deno-redis-app_redis-cluster

NODES=`docker network inspect ${REDIS_NETWORK} | jq '.[0].Containers'`

WRITER_NODES=`echo ${NODES} | jq '.[] | select(.Name == "redis-wn-1" or .Name == "redis-wn-2" or .Name == "redis-wn-3")'`

WRITER_NODE_HOSTS=`echo ${WRITER_NODES} | jq '.IPv4Address' | perl -wp -e 's!"(.+)/.+"\r?\n!$1:6379 !g'`

echo $WRITER_NODE_HOSTS

docker-compose exec redis-wn-1 bash -c "yes yes | redis-cli --cluster create ${WRITER_NODE_HOSTS}"

# TODO replication
CLUSTER_REPLICAS=1
# docker-compose exec redis-wn-1 bash -c "yes yes | redis-cli --cluster create ${WRITER_NODE_HOSTS} --cluster-replicas ${CLUSTER_REPLICAS}"
